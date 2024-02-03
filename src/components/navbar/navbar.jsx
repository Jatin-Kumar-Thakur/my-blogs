import Link from "next/link"
import Links from "./links/link";
// import { handleGithubLogOut } from "@/lib/action";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { getUserByEmail, getUserById } from "@/lib/data";

const Navbar = async () => {
    const session = await auth();
    const user=session?.user;
    let data=false;
    if(user && !user.email){
        data=await getUserById(user.id);
        data=data.isAdmin;
        // console.log(data);
    }
    else if (user){
        data=await getUserByEmail(user.email);
        data=data.isAdmin;
        // console.log(data);
    }

    return (
        <nav className=" flex justify-between items-center w-full h-20">
            <div className="">
                <p className="font-bold text-3xl">
                        <Link href='/'>
                            <Image 
                                src='/blog-logo.png'
                                alt='LOGO'
                                width={100}
                                height={50}
                            />
                        </Link>
                </p>
            </div>
            <div className="">
                <Links session={session} data={data}/>
            </div>
        </nav>
    )
}

export default Navbar
