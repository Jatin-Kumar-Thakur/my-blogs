import Image from "next/image"
import Link from "next/link"


const Postcard = ({post}) => {
    return (
        <div className="flex flex-col gap-5 mb-5 w-full ">
            <div className="flex text-nowrap">
                <div className="w-[90%] h-[300px] relative 
                    md:h-[350px]
                ">
                    <Image src={post.img || '/post.jpg'} alt="postimg" fill className="object-fill" />
                </div>
                {/* <span className="w-[0%] origin-center -rotate-90 text-xs m-auto">{post.createdAt?.toString().slice(3,16)}</span> */}
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-bold h-7 overflow-hidden">{post.title}</p>
                <p className="text-xs text-slate-700 h-7 overflow-hidden">{post.desc}</p>
                <p className="text-sm">
                    <Link href={`/blog/${post.slug}`}>READ MORE</Link>
                </p>
            </div>
        </div>
    )
}

export default Postcard
