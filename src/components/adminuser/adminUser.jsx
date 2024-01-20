
import { deleteUser } from "@/lib/action";
import { getAllUsers } from "@/lib/data"
import Image from "next/image";
import Link from "next/link";

const AdminUser = async () => {
    const users = await getAllUsers();
    // const [state,formAction]=useFormState(deleteUser,undefined);
    return (
        <div className="">
            <h1 className="flex justify-between text-2xl font-bold my-2">Users
                <span><Link href='/admin/adduser' className="bg-[#2d2b42] text-xl p-1 rounded-lg">Add User</Link></span>
            </h1>
            <div className="">
                {
                    users.map((item) => (
                        <div className="flex gap-2 my-4 items-center justify-between" key={item.id}>
                            <div className="flex justify-center items-center gap-3">
                                <Image src={item.img || "/noavatar.png"}
                                    alt=""
                                    height={50}
                                    width={50}
                                    className="overflow-hidden h-12 rounded-full object-fill"
                                />
                                <span>{item.username}</span>
                            </div>
                            <div className="">
                                {/* <form action={() => deletePostWithId(item.id)}> */}
                                <form action={deleteUser}>
                                    <input type="hidden" value={item.id} name="id" />
                                    <button className="bg-[var(--btn)] p-1 rounded-lg">Delete</button>
                                </form>
                                {/* {
                                    state && state.error
                                } */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminUser
