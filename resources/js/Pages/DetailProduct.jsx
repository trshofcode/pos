import ButtonBack from "@/Components/ButtonBack";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function DetailProduct (props) {      

    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [qty, setQty] = useState(1);

    const handleSize = event => {
        setSize(event.target.value);
    }
    
    const handleColor = event => {
        setColor(event.target.value);
    }

    function handleIncrease(){     
        if(qty < props.product.quantity){        
            setQty(nextCount => nextCount + 1);    
        }
    }   

    function handleDecrease(){    
        if(qty > 1){            
            setQty(nextCount => nextCount - 1);
        }
       }             

    const handleSubmit = () =>{
        const data = {
            product_id: props.product.id, size, color, qty
        }
        Inertia.post('/addCart', data);
    }        

    return (        
        <div className="h-screen w-full">
            <Head title={props.product.title}/>            
        <div className="p-2">
            <div className='flex'>
                <div>
                    <ButtonBack />
                </div>
                <h1 className="text-2xl font-semibold mt-2">Detail Product</h1>
            </div>            
            <div className="flex flex-col lg:flex-row justify-center mt-[-15px] gap-12 p-12">
                <div>
                    <img src={props.product.pict} width={400} height={400}/>
                    <span className="flex flex-wrap  lg:justify-center gap-4 py-4">
                    <img src={props.product.pict} width={100} height={100}/>
                    <img src={props.product.pict} width={100} height={100}/>
                    <img src={props.product.pict} width={100} height={100}/>
                    </span>
                </div>
                <div className="flex flex-col lg:w-[30rem]">
                    <div className="text-4xl font-bold">
                        <h1>{props.product.title}</h1>                    
                        <span className="text-base font-thin">
                            <div>
                            Rp. {props.product.price}
                            <p>Stock: {props.product.quantity}</p>  
                            </div>
                        </span>                       
                    </div>
                    <div className="flex flex-row">
                       
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h1 className="text-xl font-bold">Description</h1>
                        <span className="text-base font-thin">
                        BOXY CROP SHIRT + PIN 
                        Length 60cm Width 67cm
                        Panjang 60cm Lebar 67cm
                        Material : Premium American drill + YKK Zipper
                        In the package there is : Shirt + Bros pin + Sticker + Thanks card
                        Dalam paketnya terdapat : Kemeja + Pin Bros + Stiker + Kartu Ucapan Terima Kasih
                        #shirt #boxyshirt #oversizeshirt #cropshirt #kemeja #kemejaboxy #kemejaoversize #kemejacrop
                        Weight: 500g
                        </span>
                    </div>  
                </div>
                <div className="lg:w-1/4">                   
                    <div className="bg-neutral rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Choose Option</h2>
                         <select className="select select-ghost w-full max-w-xs px-2 mb-2" value={size} onChange={handleSize}>
                            <option value="">All Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <select className="select select-ghost w-full max-w-xs px-2 mb-2" value={color} onChange={handleColor}>
                            <option value=''>Color</option>
                            <option value='red'>Red</option>
                            <option value='white'>White</option>
                            <option value='black'>Black</option>                        
                        </select>
                        <div className="flex items-center">
                        <button onClick= {handleDecrease} className="border rounded-md px-5 py-1 ml-6">-</button>
                        <span className="text-center w-full">{qty}</span>                                        
                        <button onClick={handleIncrease} className="border rounded-md px-5 py-1 mr-8">+</button>
                        </div>
                        {/* <Link href={route('add.cart')} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full" as="button" method="post">Checkout</Link> */}
                        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </div>
                    <button className="border border-slate-700 bg-base-200 text-white py-2 px-4 rounded-lg mt-4 w-full hover:border-slate-400">
                        <p className="opacity-60 hover:opacity-100">Chat Admin</p>
                        </button>
                </div>
            </div>        
        </div>
        </div>
    )
}
