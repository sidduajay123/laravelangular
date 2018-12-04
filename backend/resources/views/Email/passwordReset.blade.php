@component('mail::message')
# Change password Request

Click on below button to change your password

@component('mail::button', ['url' => 'http://localhost:4201/response-password-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
