<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
Route::get('/name', function () {
    return ('welcome');
});


Route::namespace('Admin')->group(function () {

    Route::get('/name/admin','AdminController@indix');
});

//  ==
//  ==

Route::prefix('name')->group(function () {

    Route::get('admin', 'Admin\AdminController@indix');
});

//  ==
//  ==


Route::group(['prefix'=>'name','namespace'=>'Admin'],function (){                //['prefix'=>'admin','middleware' =>','namespace =>']

    Route::get('admin', 'AdminController@indix');

});

//Route::get('admin', 'BookController@indix');
