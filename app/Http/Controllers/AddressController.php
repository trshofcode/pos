<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Inertia\Inertia;

class AddressController extends Controller
{  

    public function store(Request $request){
        $addrs = new Address();        
        $addrs->user_id = auth()->user()->id;
        $addrs->prov = $request->prov;
        $addrs->kabupaten = $request->kab;
        $addrs->kecamatan = $request->kec;
        $addrs->desa = $request->desa;        
        $addrs->ket = $request->ket;        
        $addrs->kd_pos = $request->postzip;        
        $addrs->save();        

        return redirect()->back()->with('message', 'Berhasil menambahkan alamat');
    }
}
