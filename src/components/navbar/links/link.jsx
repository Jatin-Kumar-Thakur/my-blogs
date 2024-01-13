"use client";

import { useState } from "react";
import NavLink from "./navlink/page";
import { FaBars } from "react-icons/fa";

// import { useState } from "react";
// import styles from "./links.module.css";
// import NavLink from "./navLink/navLink";
// import Image from "next/image";
// import { handleLogout } from "@/lib/action";
const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = () => {
    const session = true;
    const isAdmin = true;
    const [toggle, setToggle] = useState(false);
    return (
        <div className="">
            <div className="md:flex gap-0 text-sm hidden">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className="p-2 bg-[var(--btn)] font-medium ml-3">Logout</button>
                        </>
                    )
                        :
                        <NavLink item={{ title: "Login", path: "/login" }} />
                }
            </div>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}><FaBars size={25}/></button>
            {
                toggle && (
                    <div className="md:hidden flex flex-col items-center justify-center absolute right-0 top-[100px] gap-4 text-sm
                    ease-in-out overflow-hidden w-[50%] bg-[var(--bg)] h-[calc(100vh-200px)]
                    ">
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))}
                        {
                            session ? (
                                <>
                                    {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                                    <button className="p-2 bg-[var(--btn)] font-medium">Logout</button>
                                </>
                            )
                                :
                                <NavLink item={{ title: "Login", path: "/login" }} />
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Links;