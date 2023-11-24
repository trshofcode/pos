import { Link } from "@inertiajs/react";

const ButtonBack = () =>{
    return (
        <div>
        <Link href={route('homepage')} as="button">
        <label tabIndex={0} className="btn btn-ghost btn-circle mb-2">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </div>
        </label>
        </Link>
        </div>
    )
}

export default ButtonBack;