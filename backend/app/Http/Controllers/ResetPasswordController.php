<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use App\User;
use DB;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request)
    {
        if(!$this->validateEmail($request->email)){
            return $this->failedResponse();
        }

        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email)
    {
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function createToken($email){
        $oldToken = DB::collection('password_resets')->where('email',$email)->first();

        if ($oldToken) {
            return $oldToken;
        }
        $token = str_random(60);
        $this->saveToken($token,$email);
    }

    public function saveToken($token,$email){
        $rest_token = DB::collection('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_by' => Carbon::now()
        ]);

    }

    public function validateEmail($email)
    {
        return !!User::where('email',$email)->first();
    }

    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email is not found'
        ],Response::HTTP_NOT_FOUND);
    }

    public function successResponse(){
        return response()->json([
            'data' => 'Email is sent successfully'
        ],Response::HTTP_OK);
    }
}
