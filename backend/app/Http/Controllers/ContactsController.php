<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts;
class ContactsController extends Controller
{
    public function store(Request $request)
    {   
         $request->validate([
        'name' => 'required|string',
        'phone_number' => 'required|string',
        'address' => 'required|json',
        'address.*.latitude' => 'required|numeric',
        'address.*.longitude' => 'required|numeric',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,ico|max:2048',
    ]);
    
    
        $name = $request->input('name');
        $phone_number = $request->input('phone_number');
        $address = $request->input('address');
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images');
            $image_path  = "/storage".str_replace('public', '', $imagePath);
        }else {
            
            $image_path = '/storage/images/profilepic.png';
            
        }
        $contact = new Contacts();
    
        $contact->name = $name;
        $contact->phone_number = $phone_number;
        $contact->address = $address;
        $contact->image=$image_path;
        $contact->save();
    
        return json_encode(["contact" => $contact]);
    }


    public function getContacts(Request $request)
{
   
    $contacts = Contacts::all();


    return response()->json(['contacts' => $contacts]);
}
    
}
