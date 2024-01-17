import { getPost, getUser } from "@/lib/data";
import Image from "next/image";

// Using api routes
const getData = async (slug) => {
    const post = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!post.ok) {
        throw new Error("Somthing Went wrong while fetching post");
    }
    return post.json();
}

const SlugPost = async ({ params }) => {

    const { slug } = params;
    const post = await getData(slug);

    //Data without api
    // const post = await getPost(slug);

    const user = await getUser(post.userId);

    return (
        <div className="flex flex-col gap-24 mt-5
            md:flex-row md:h-[calc(100vh-200px)]
        ">
            <div className=" h-[400px] relative
                md:h-[calc(100vh - 200px)]
                md:basis-1/3
            ">
                <Image
                    src={post.img || '/post.jpg'}
                    alt=""
                    fill
                    className="object-contain md:object-cover"
                />
            </div>
            <div className=" md:overflow-y-scroll 
                md:basis-2/3
            ">
                <h1 className="text-4xl font-bold mb-5">{post.title}</h1>
                <div className="h-10 flex mb-5 items-center gap-5 overflow-hidden">
                    <Image
                        src={user.img || '/noavatar.png'}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                    <div className="font-medium">
                        <p className="text-sm text-gray-400">Author</p>
                        <p>{user.username}</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-gray-400">Published</p>
                        <p>{user?.createdAt.toString().slice(3, 16)}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-xl mb-5">
                        {post.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SlugPost;