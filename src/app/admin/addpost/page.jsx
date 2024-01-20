import AdminPostForm from "@/components/adminpostform/adminPostForm"
import { auth } from "@/lib/auth";



const AddPost =async () => {
    const session = await auth();
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%]">
                <AdminPostForm userId={session.user.id}/>
            </div>
        </div>
    )
}

export default AddPost
