<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

  

    public function unauthorized(Request $request)
    {
        return response()->json([
            'status' => 'Error',
            'message' => 'Unauthorized',
        ], 200);
    }



    public function profile(Request $request)
    {
        return response()->json([
            'status' => 'Success',
            'data' => Auth::user(),
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $user->token = $token;
       

        return response()->json([
            'status' => 'Success',
            'data' => $user
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User;
       
        $user->name = $request->name;
       
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        
        $user->save();

        $token = Auth::login($user);
        $user->token = $token;
        

        return response()->json([
            'status' => 'Success',
            'data' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        $user = Auth::user();
        $user->token = Auth::refresh();

        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }


    public function store(Request $request)
{
    $name = $request->input('name');
    $phone_number = $request->input('phone_number');
    $address = $request->input('address');
    $latitude = $request->input('latitude');
    $longitude = $request->input('longitude');

    if (empty($name) || empty($phone_number) || empty($address) || empty($latitude) || empty($longitude)) {
        return json_encode(["message" => "All fields are required."]);
    }

    $contact = new Contact();

    $contact->name = $name;
    $contact->phone_number = $phone_number;
    $contact->address = $address;
    $contact->latitude = $latitude;
    $contact->longitude = $longitude;

    $contact->save();

    return json_encode(["contact" => $contact]);
}

}
