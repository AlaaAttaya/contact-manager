<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactsController;


   
Route::post('contacts/store', [ContactsController::class, 'store']);
Route::get('contacts', [ContactsController::class, 'getContacts']);


