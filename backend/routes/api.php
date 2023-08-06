<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactsController;


   
Route::post('contacts/store', [AuthController::class, 'store']);
Route::get('contacts', [AuthController::class, 'getContacts']);


