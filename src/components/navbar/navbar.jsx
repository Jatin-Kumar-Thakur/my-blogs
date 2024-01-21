import Link from "next/link"
import Links from "./links/link";
// import { handleGithubLogOut } from "@/lib/action";
import { auth } from "@/lib/auth";

const Navbar = async () => {
    const session = await auth();
    // console.log(session);
    return (
        <nav className=" flex justify-between items-center w-full h-20">
            <div className="">
                <p className="font-bold text-3xl">
                        <Link href='/'>LOGO</Link>
                </p>
            </div>
            <div className="">
                <Links session={session}/>
            </div>
        </nav>
    )
}

export default Navbar
