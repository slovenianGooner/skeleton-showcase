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
        // usleep(5 * 1000000);
        // }
        return inertia($view);
    });
});

Route::delayedInertia('auth/login', 'Auth/Login');
Route::delayedInertia('auth/forgot-password', 'Auth/ForgotPassword');
Route::delayedInertia('auth/reset-password', 'Auth/ResetPassword');

Route::delayedInertia('/', 'Index');
Route::delayedInertia("alerts", "Alerts");
Route::delayedInertia("buttons", "Buttons");
Route::delayedInertia("inputs/basic", "Inputs/Basic");
Route::delayedInertia("inputs/select", "Inputs/Select");
Route::delayedInertia("inputs/checkbox", "Inputs/Checkbox");
Route::delayedInertia("inputs/file", "Inputs/File");
Route::delayedInertia("inputs/photo", "Inputs/Photo");
Route::delayedInertia("inputs/list", "Inputs/List");
Route::delayedInertia("inputs/custom-select", "Inputs/CustomSelect");
Route::delayedInertia("inputs/wysiwyg", "Inputs/WYSIWYG");
Route::delayedInertia("inputs/date-picker", "Inputs/DatePicker");
Route::delayedInertia("inputs/autocomplete", "Inputs/Autocomplete");
Route::delayedInertia("inputs/treeselect", "Inputs/TreeSelect");
Route::delayedInertia("inputs/tags", "Inputs/Tags");
Route::delayedInertia("inputs/blocks", "Inputs/Blocks");
Route::delayedInertia("modals", "Modals");

Route::get("dynamic-options", function () {
    $faker = Factory::create();
    $items = collect();

    for ($i = 0; $i < 30; $i++) {
        $items->push($faker->lastName());
    }

    return $items->toArray();
})->name("dynamic-options");

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
})->name("lists");

Route::delayedInertia('misc', 'Misc');

Route::post("modal", function () {
    return redirect("/modals")->with("success", "Modal was submitted.");
});

Route::delete("confirmation-modal", function () {
    return redirect("/modals")->with("success", "Modal was confirmed.");
});
