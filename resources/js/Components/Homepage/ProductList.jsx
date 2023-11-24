import { Link } from "@inertiajs/react"

const isProduct = (products) => {

    return products.map((data, i) => {
        return (        
            <Link key={i} href={route('detail.product')} data={{ id: data.id }} method="get" as="button"  className="card w-full lg:w-96 bg-neutral shadow-xl">
            <div >
                <figure>
                    <img src={data.pict} alt="product"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>                    
                    <p className="text-left">Rp. {data.price}</p>
                    <div className="card-actions justify-end">
                        {data.quantity < 1 ? (
                            <div className="badge badge-outline">
                                STOK HABIS
                            </div>
                        ) : (
                            <div className="badge badge-outline">
                                STOK TERSEDIA
                            </div>
                        )}
                    </div>            
                </div>
                </div>        
            </Link>
        );
    });
};

const noProduct = () => {
    return <div>Belum ada produk</div>;
};

const ProductList = ({ products }) => {
    return !products ? noProduct() : isProduct(products);
};

export default ProductList;
