import Image from "next/image"
import Link from "next/link"


const Postcard = () => {
    return (
        <div className="flex flex-col gap-5 mb-5 w-full">
            <div className="flex text-nowrap">
                <div className="w-[90%] h-[300px] relative 
                    md:h-[350px]
                ">
                    <Image src='/post.jpg' alt="postimg" fill className="object-fill" />
                </div>
                <span className="w-[0%] origin-center -rotate-90 text-xs m-auto">14 Jan 2023</span>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-bold">Title</p>
                <p className="text-xs text-slate-700">desc</p>
                <p className="text-sm">
                    <Link href='/blog/test'>READ MORE</Link>
                </p>
            </div>
        </div>
    )
}

export default Postcard
