import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const isCart = (myCart) => {

    const [cart, setCart] = useState(myCart)

    function handleIncreaseItems(itemId){
        setCart(cart.map(item => {
            if (item.id === itemId){
                return {                
                    ...item, 
                    quantity: item.quantity + 1
                };
            } else {
                return item;
            }        
        }))            
    }

    function handleDecreaseItems(itemId){    
        let removeProduct = cart.map(item => {
            if (item.id === itemId){
                return {                
                    ...item, 
                    quantity: item.quantity - 1,                    
                };
            } else {
                return item;
            }                
        });
        removeProduct = removeProduct.filter(p =>
            p.quantity > 0 );           
            setCart(removeProduct)      
    }        
    
    return cart.map((item,i) => {                 

        return (        
        <div key={i} className="flex flex-col gap-4">            
                <div className="bg-neutral rounded-lg shadow-md">
                    <table className="table">
                        {/* <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td className="py-2 px-1">
                                    <div className="flex sm:flex-wrap items-center">
                                        <img className="h-16 w-16 mr-4" src={item.pict} alt="Product image"/>
                                        <span className="font-semibold">{item.title}</span>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="justify-items-center">Rp. {item.price}</div>
                                    </td>
                                <td className="py-2">
                                    <div className="flex items-center">                                        
                                        <button onClick={()=> {handleDecreaseItems(item.id)}} className="border rounded-md py-1 px-2 ml-8">-</button>                                    
                                        <span className="text-center w-8">{item.quantity}</span>                                        
                                        <button onClick={()=> {handleIncreaseItems(item.id)}} className="border rounded-md py-1 px-2 mr-8">+</button>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex justify-items-center">
                                        Rp. {(item.price)*item.quantity}
                                    </div>
                                </td>    
                                <td className="py-2">
                                    <Link href="/item/delete" method="post" data={{id: item.id}} as="button">
                                        <div className="flex justify-items-center mr">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </div>
                                    </Link>
                                </td>                                
                            </tr>                        
                        </tbody>
                    </table>            
            </div>                    
        </div>
        )
    });
}

const noCart = () => {
    return <div>Belum ada Produk Di Keranjang</div>
};

const CartList = ({ myCart }) => {
    return myCart > 0 ? noCart() : isCart(myCart);
};

export default CartList;