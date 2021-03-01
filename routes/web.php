<?php

use Faker\Factory;
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

Route::inertia('/', 'Index');
Route::inertia("alerts", "Alerts");
Route::inertia("buttons", "Buttons");
Route::inertia("inputs/basic", "Inputs/Basic");
Route::inertia("inputs/select", "Inputs/Select");
Route::inertia("inputs/checkbox", "Inputs/Checkbox");
Route::inertia("inputs/file", "Inputs/File");
Route::inertia("inputs/photo", "Inputs/Photo");
Route::inertia("inputs/list", "Inputs/List");
Route::inertia("inputs/custom-select", "Inputs/CustomSelect");
Route::inertia("modals", "Modals");

Route::get("lists", function () {
    // usleep(1 * 1000000);
    $faker = Factory::create();

    $items = collect();
    for ($i = 0; $i < 200; $i++) {
        $items->push((object)[
            "name" => $faker->name() . " " . $faker->lastName(),
            "email" => $faker->email(),
            "type" => $faker->jobTitle(),
            "expiring" => $faker->dateTimeThisYear()->format("Y-m-d")
        ]);
    }

    if (request()->query("search")) {
        $items = $items->filter(function ($item) {
            return str_contains($item->name, request()->query("search"));
        })->values();
    }

    return inertia("Lists", [
        "items" => $items->paginate(5)->appends(request()->query())
    ]);
});

Route::delayedInertia('misc', 'Misc');

Route::post("modal", function () {
    return redirect("/modals")->with("success", "Modal was submitted.");
});

Route::delete("confirmation-modal", function () {
    return redirect("/modals")->with("success", "Modal was confirmed.");
});
