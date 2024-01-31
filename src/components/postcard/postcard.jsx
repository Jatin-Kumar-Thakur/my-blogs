import Image from "next/image"
import Link from "next/link"


const Postcard = ({post}) => {
    return (
        <div key={post.id} className="flex flex-col gap-5 mb-5 w-full ">
            <div className="flex text-nowrap">
                <div className="w-[90%] h-[300px] relative 
                    md:h-[350px]">
                    <Image src={post.img || '/post.jpg'} alt="postimg" fill className="object-fill" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-bold h-7 overflow-hidden">{post.title}</p>
                <p className="text-xs text-slate-700 h-7 overflow-hidden w-[90%]">{post.desc}</p>
                <p className="text-sm">
                    <Link href={`/blog/${post.slug}`}>READ MORE</Link>
                </p>
            </div>
        </div>
    )
}

export default Postcard
