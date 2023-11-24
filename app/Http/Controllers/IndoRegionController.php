<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Province;
use Inertia\Inertia;

class IndoRegionController extends Controller
{
    public function dropdown(){
        $provinces = Province::all();
        Inertia::render('Profil/Edit', [
            'provinsi' => $provinces,
        ]);
    }

}
