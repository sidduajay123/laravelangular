<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\http\Requests\ChangePasswordRequest;
use Symfony\Component\HttpFoundation\Response;
use DB;
use App\User;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request)
    {
        return $this->getPasswordToken($request)->count()> 0 ? $this->changePassword($request) : $this->tokenNotFound();
    }

    private function getPasswordToken($request){
        return DB::collection('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken]);
    }

    private function changePassword($request)
    {
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=> ($request->pasword)]);
        $this->getPasswordToken($request)->delete();
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }

    private function tokenNotFound()
    {
        return response()->json(['error' => 'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);        
    }
}
