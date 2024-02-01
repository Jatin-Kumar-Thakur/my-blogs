import AdminPostForm from "@/components/adminpostform/adminPostForm"
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
import Link from "next/link";



const AddPost = async () => {
    const session = await auth();
    const user = session.user;
    let data;
    let id;
    if (user?.email) {
        data = await getUserByEmail(user.email);
        id = data._id;
    }
    else {
        id = user.id;
    }
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%] text-center">
                <AdminPostForm userId={`${id}`} />
                <p className="mt-3"><Link href="/aboutuser">Go to Your posts?</Link></p>
            </div>
        </div>
    )
}

export default AddPost
