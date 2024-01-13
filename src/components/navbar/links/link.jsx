"use client";

import NavLink from "./navlink/page";


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

const session =true;
const isAdmin =true;
const Links = () => {
    
    return (
            <div className="flex gap-4 text-sm">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{title : "Admin" , path:"/admin"}}/>}
                            <button className="p-2 bg-[var(--btn)] font-medium">Logout</button> 
                        </>
                    )
                    :
                    <NavLink item={{title:"Login" ,path:"/login"}}/>
                }
            </div>
    );
};

export default Links;