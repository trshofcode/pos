<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Controllers\CartController;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {    
        $products = new ProductCollection(Product::OrderbyDesc('id')->paginate(8)); 
        $cart = Cart::all();
        // $cart = Cart::all();
       return Inertia::render('Homepage', [
            'title' => 'BERANDA',
            'description' => 'OFFICIAL STORE TRSHOFTEE',
            'product' => $products,  
            'cart' => $cart     
        ]);            
        return redirect()->back()->with('message', 'Produk berhasil ditambahkan ke keranjang');
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
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function detail (Request $request, Product $product){ 
        $cart = Cart::all();           
        return Inertia::render('DetailProduct', [          
            'product' => $product->find($request->id),                     
        ]);            

    }    
}
