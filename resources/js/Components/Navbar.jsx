import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Navbar = ({ user, carts }) => {    
    const [cart, setCart] = useState('')

    const filterCart = () => {
        carts
            .filter(e => e.user_id === user.id)
            .map((crt,i ,arr) => {
                return setCart(arr.length)
            });
    };

    useEffect(() => {
        filterCart()
    },[])    

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
                    >
                        <li>
                            <a>NEW ARRIVAL</a>
                        </li>
                        <li>
                            <a>CATEGORY</a>
                            <ul className="p-2">
                                <li>
                                    <a>TSHIRT</a>
                                </li>
                                <li>
                                    <a>CLOTH</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>STORE</a>
                        </li>
                    </ul>
                </div>
                <Link
                    href={route("homepage")}
                    as="button"
                    className="btn btn-ghost normal-case text-xl"
                >
                    TRSHOFTEE
                </Link>
            </div>
            <div className="navbar-center lg:flex max-md:hidden">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>NEW ARRIVAL</a>
                    </li>
                    <li tabIndex={0} className="z-[1]">
                        <details>
                            <summary>CATEGORY</summary>
                            <ul className="p-2">
                                <li>
                                    <a>TSHIRT</a>
                                </li>
                                <li>
                                    <a>CLOTH</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>STORE</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <Link href="/cart">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            {!user ? (
                                <span className="badge badge-sm indicator-item">
                                    0
                                </span>
                            ) : (
                                <span className="badge badge-sm indicator-item">
                                    {cart}
                                </span>
                            )}
                        </div>
                    </Link>
                </label>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Daftar
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
