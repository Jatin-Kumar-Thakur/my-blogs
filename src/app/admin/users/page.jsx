import AdminUser from "@/components/adminuser/adminUser"


const Users = () => {
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-full sm:w-[65%]">
                <AdminUser />
            </div>
        </div>
    )
}   

export default Users
