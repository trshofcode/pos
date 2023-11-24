<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Address;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart = Cart::all();    
        return Inertia::render('CartPage', [
            'title' => 'KERANJANG',
            'cart' => $cart,                
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $carts = new Cart();
        $carts->product_id = $request->product_id;
        $carts->user_id = auth()->user()->id;
        $carts->qty = $request->qty;
        $carts->size = $request->size;
        $carts->color = $request->color;        
        $carts->save();

        return redirect()->back()->with('message', 'Produk berhasil ditambahkan ke keranjang');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Cart $cart)
    {
        $alamats = Address::where('addresses.user_id', '=', auth()->user()->id)->get();
        $myCart = 
        DB::table('carts')        
        ->where('carts.user_id', '=', auth()->user()->id)           
        ->join('products', 'products.id', '=', 'carts.product_id')     
        ->join('users', 'users.id', '=', 'carts.user_id') 
        ->select('carts.*', 'products.title','products.pict', 'products.price', 'users.name')
        ->get();
        // $cart::where('user_id', auth()->user()->id)->get();        
        return Inertia::render('CartPage', [ 
            'title' => 'KERANJANG',           
            'myCart' => $myCart,  
            'alamat' => $alamats,             
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Cart $cart)
    {
        $cart = Cart::find($request->id);

        $cart->delete();
        
        return redirect()->back()->with('message', 'Produk berhasil dihapus');        
    }

    public function addAlamat(Request $request){
        $addrs = new Address();        
        $addrs->user_id = auth()->user()->id;
        $addrs->prov = $request->prov;
        $addrs->kabupaten = $request->kab;
        $addrs->kecamatan = $request->kec;
        $addrs->desa = $request->desa;        
        $addrs->ket = $request->ket;        
        $addrs->kd_pos = $request->postzip;        
        $addrs->save();

        return redirect()->back()->with('message', 'Alamat berhasil ditambahkan');
    }
}
