import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data"
import Image from "next/image";
import Link from "next/link";


const AdminPost = async () => {
    const posts = await getPosts();

    //another way to delete post using bind

    // const deletePostWithId = ({ id }) => {
    //     return deletePost.bind(null, id);
    // }
    return (
        <div className="w-full">
            <h1 className=" flex justify-between text-2xl font-bold my-2">Posts  
                <span><Link href='/admin/addpost' className="bg-[#2d2b42] text-xl p-1 rounded-lg">Add Post</Link></span>
            </h1>
            <div className="">
                {
                    posts.map((item) => (
                        <div className="flex w-full gap-2 my-4 items-center justify-between" key={item.id}>
                            <div className="flex truncate items-center gap-3 basis-3/4">
                                <Image src={item.img || "/noavatar.png"}
                                    alt=""
                                    height={50}
                                    width={50}
                                    className=" h-12 rounded-full object-fill"
                                />
                                <p className="truncate">{item.title}</p>
                            </div>
                            <div className="basis-1/4 flex justify-end">
                                {/* <form action={() => deletePostWithId(item.id)}> */}
                                <form action={deletePost}>
                                    <input type="hidden" value={item.id} name="id" />
                                    <button className="bg-[var(--btn)] p-1 rounded-lg">Delete</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminPost
