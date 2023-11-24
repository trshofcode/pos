import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/Homepage/ProductList";
import Carousel from "@/Components/Homepage/Carousel";

export default function Homepage(props) {
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} carts={props.cart}/>
            <Carousel />
            <h1 className="px-12 py-4 items-center text-xl font-semibold">                
                Produk Terbaru
            </h1>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <ProductList products={props.product.data} />
            </div>
            {/* <div>
                <Paginator meta={props.product.meta} />
            </div>      */}
        </div>
    );
}
