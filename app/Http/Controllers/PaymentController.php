<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use Inertia\Inertia;

class PaymentController extends Controller
{

    public function checkout(Request $request){
        $orders = new Payment();
        $orders->transaction_id = $request->transaction_id;
        $orders->cart_id = $request->cart_id;
        $orders->user_id = auth()->user()->id;
        $orders->alamat = $request->alamat;
        $orders->total = $request->total;              
        $orders->status = 1;                          

        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $orders->transaction_id,
                'gross_amount' => $orders->total,
            ),
            'customer_details' => array(
                'name' => auth()->user()->name,                            
                'alamat' => $orders->alamat,
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params); 
        $orders->token = $snapToken;                      
        // $orders->save();           
        // dd($orders->all());        
        return Inertia::render('CheckoutPage',[            
            'order' => $orders
        ]);
        // return redirect()->back()->with('message', 'Yay it worked');                   
        
    }        

    public function index (){
        return Inertia::render('CheckoutPage', [            
            'order' => Payment::all()
        ]);
    }
}
