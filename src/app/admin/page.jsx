import AdminPost from "@/components/adminpost/adminPost";
import AdminPostForm from "@/components/adminpostform/adminPostForm";
import AdminUser from "@/components/adminuser/adminUser";
import AdminUserForm from "@/components/adminuserform/adminuserForm";
import { auth } from "@/lib/auth";

const Admin = async () => {
    const session = await auth();
    // console.log(session);
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%]">
                <AdminPost />
            </div>
        </div>
    )
}
export default Admin;