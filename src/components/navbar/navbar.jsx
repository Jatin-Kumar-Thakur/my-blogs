import Link from "next/link"
import style from './navbar.module.css';
import Links from "./links/link";

const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center w-full h-20">
            <div className="">
                <p className="font-bold text-3xl">Blogs</p>
            </div>
            <div className="">
                <Links />
            </div>
        </nav>
    )
}

export default Navbar
