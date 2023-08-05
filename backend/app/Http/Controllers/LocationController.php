<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller
{
   
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
