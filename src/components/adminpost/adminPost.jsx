import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data"
import Image from "next/image";


const AdminPost = async () => {
    const posts = await getPosts();

    //another way to delete post using bind

    // const deletePostWithId = ({ id }) => {
    //     return deletePost.bind(null, id);
    // }
    return (
        <div className="">
            <h1 className="text-2xl font-bold my-2">Posts</h1>
            <div className="">
                {
                    posts.map((item) => (
                        <div className="flex gap-2 my-4 items-center justify-between" key={item.id}>
                            <div className="flex justify-center items-center gap-3">
                                <Image src={item.img || "/noavatar.png"}
                                    alt=""
                                    height={50}
                                    width={50}
                                    className="overflow-hidden h-12 rounded-full object-fill"
                                />
                                <span>{item.title}</span>
                            </div>
                            <div className="">
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
