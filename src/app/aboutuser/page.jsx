import { deletePost } from "@/lib/action";
import { auth } from "@/lib/auth"
import { getPosts, getUser, getUserByEmail, getUserPosts } from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

const MyBlogs = async () => {
    const session = await auth();
    const user = session.user;
    let data;
    let posts;
    if (user?.email) {
        console.log("inmail")
        data = await getUserByEmail(user.email);
        posts = await getPosts();
        posts = posts.filter((item) => item.userId === user.id);

    }
    else {
        data = await getUser(user.id);
        posts = await getPosts();
        posts = posts.filter((item) => item.userId === user.id);
    }

    return (
        <div className="min-h-[calc(100vh-200px)] flex flex-col md:flex-row">
            <div className=" w-full mb-14 basis-1/2">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="">
                        <Image
                            src={data?.img || "/noavatar.png"}
                            width={200}
                            height={200}
                            alt="user image"
                        />
                    </div>
                    <div className="font-bold">
                        <p className="text-3xl text-center">{data?.username}</p>
                        <p className="text-xl">{data?.email}</p>
                        <div className="mt-5 text-center">
                            <p>Total Posts : count</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold underline">All Posts</h1>
                    <div className="">
                        <form action="">
                            <input type="hidden" value={user.id}/>
                            <button className="bg-[var(--btn)] p-1 rounded-sm">
                                <Link href="/aboutuser/addpost">AddUser</Link>
                            </button>
                        </form>
                    </div>
                </div>
                {
                    posts.map((item) => (
                        <div className="flex gap-4 my-4 items-center justify-between" key={item.id}>
                            <div className="flex justify-center items-center gap-3">
                                <Image src={item.img || "/noavatar.png"}
                                    alt=""
                                    height={50}
                                    width={50}
                                    className="overflow-hidden h-12 w-12 rounded-full object-fill"
                                />
                                <span className="truncate">{item.title} </span>
                            </div>
                            <div className="flex gap-2">
                                <form action="">
                                    <input type="hidden" value={item.id} name="id" />
                                    <button className="bg-[var(--btn)] p-1 rounded-lg px-4">Edit</button>
                                </form>
                                <form action={deletePost}>
                                    <input type="hidden" value={item.id} name="id" />
                                    <button className="bg-red-500 p-1 rounded-lg">Delete</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyBlogs
