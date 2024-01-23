import AdminPostForm from "@/components/adminpostform/adminPostForm"
import { auth } from "@/lib/auth";
import Link from "next/link";



const AddPost = async (userId) => {
    const session = await auth();
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%] text-center">
                <AdminPostForm userId={session.user.id} />
                <p className="mt-3"><Link href="/aboutuser">Go to Your posts?</Link></p>
            </div>
        </div>
    )
}

export default AddPost
