"use client";

import { useState } from "react";
import NavLink from "./navlink/page";
import { FaBars } from "react-icons/fa";
import { handleGithubLogOut } from "@/lib/action";
import style from './navlink/navlink.module.css'

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
        title: "Profile",
        path: "/aboutuser",
    },


];

const Links = ({ session ,data }) => {
    const isAdmin = true;
    const [toggle, setToggle] = useState(false);
    return (
        <div className="">
            <div className={`gap-0 text-sm ${style.hide}`}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {
                    session ? (
                        <>
                            {data && <NavLink item={{ title: "Admin", path: "/admin" }} key={"admin"} />}
                            <form action={handleGithubLogOut}>
                                <button className="p-2 bg-[var(--btn)] font-medium ml-2">Logout</button>
                            </form>
                        </>
                    )
                        :
                        <NavLink item={{ title: "Login", path: "/login" }} key={"login"} />
                }
            </div>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}><FaBars size={25} /></button>
            {
                toggle && (
                    <div className="md:hidden flex flex-col items-center justify-center absolute right-0 top-[100px] gap-4 text-sm
                    ease-in-out overflow-hidden w-[50%] bg-[var(--bg)] h-[calc(100vh-200px)]
                    ">
                        {links.map((link) => (
                            <button key={link.title} onClick={() => setToggle(false)}><NavLink item={link} /></button>
                        ))}
                        {
                            session ? (
                                <>
                                    {isAdmin && <button onClick={() => setToggle(false)}><NavLink item={{ title: "Admin", path: "/admin" }} key={"admin"} /></button>}
                                    <form action={handleGithubLogOut}>
                                        <button className="p-2 bg-[var(--btn)] font-medium">Logout</button>
                                    </form>
                                </>
                            )
                                :
                                <button onClick={() => setToggle(false)}><NavLink item={{ title: "Login", path: "/login" }} key={"login"} /></button>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Links;