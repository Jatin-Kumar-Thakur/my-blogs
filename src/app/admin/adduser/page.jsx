import AdminUserForm from "@/components/adminuserform/adminuserForm"


const AddUser = () => {
    return (
        <div className="flex justify-center gap-5 w-full min-h-[calc(100vh-230px)]">
            <div className="w-[65%]">
                <AdminUserForm />
            </div>
        </div>
    )
}

export default AddUser
