import AdminPostForm from "@/components/adminpostform/adminPostForm"
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";



const AddPost =async () => {
    const session = await auth();
    const user=session.user;
    let data;
    let id;
    if(user?.email){
        data=await getUserByEmail(user.email);
        // console.log(data);
        id=data._id;
    }
    else{
        id=user.id;
    }
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%]">
                <AdminPostForm userId={`${id}`}/>
            </div>
        </div>
    )
}

export default AddPost
