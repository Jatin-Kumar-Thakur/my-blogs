"use client";

import { useState } from "react";
import NavLink from "./navlink/page";
import { FaBars } from "react-icons/fa";
import { handleGithubLogOut } from "@/lib/action";

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
    {
        title: "Mine",
        path: "/userblogs",
    },
];

const Links = ({ session }) => {
    // console.log(session.user);
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
                            <form action={handleGithubLogOut}>
                                <button className="p-2 bg-[var(--btn)] font-medium ml-2">Logout</button>
                            </form>
                        </>
                    )
                        :
                        <NavLink  item={{ title: "Login", path: "/login" }} />
                }
            </div>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}><FaBars size={25} /></button>
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
                                    <form action={handleGithubLogOut}>
                                        <button className="p-2 bg-[var(--btn)] font-medium">Logout</button>
                                    </form>
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