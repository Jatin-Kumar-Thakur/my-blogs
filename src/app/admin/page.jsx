import AdminPost from "@/components/adminpost/adminPost";
import AdminPostForm from "@/components/adminpostform/adminPostForm";
import AdminUser from "@/components/adminuser/adminUser";
import AdminUserForm from "@/components/adminuserform/adminuserForm";
import { auth } from "@/lib/auth";

const Admin = async () => {
    const session = await auth();
    console.log(session);
    return (
        <div className="flex gap-5">
            <div className="basis-1/2">
                <div className="">
                    <AdminPost />
                </div>
                <div className="">
                    <AdminPostForm userId={session.user.id}/>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="">
                    <AdminUser />
                </div>
                <div className="">
                    <AdminUserForm />
                </div>
            </div>
        </div>
    )
}
export default Admin;