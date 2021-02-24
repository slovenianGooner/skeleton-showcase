<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

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

Route::macro("delayedInertia", function ($route, $view) {
    Route::get($route, function () use ($view) {
        // if (env("APP_DEBUG")) {
        //     usleep(0.5 * 1000000);
        // }
        return inertia($view);
    });
});

Route::inertia('auth/login', 'Auth/Login');
Route::inertia('auth/forgot-password', 'Auth/ForgotPassword');
Route::inertia('auth/reset-password', 'Auth/ResetPassword');

Route::delayedInertia('/', 'Index');
Route::delayedInertia("alerts", "Alerts");
Route::delayedInertia("buttons", "Buttons");
Route::delayedInertia("inputs/basic", "Inputs/Basic");
Route::delayedInertia("inputs/select", "Inputs/Select");
Route::delayedInertia("inputs/checkbox", "Inputs/Checkbox");
Route::delayedInertia("inputs/file", "Inputs/File");
Route::delayedInertia("inputs/photo", "Inputs/Photo");
Route::delayedInertia("modals", "Modals");
Route::delayedInertia("lists", "Lists");

Route::post("modal", function () {
    return redirect("/modals")->with("success", "Modal was submitted.");
});

Route::delete("confirmation-modal", function () {
    return redirect("/modals")->with("success", "Modal was confirmed.");
});
