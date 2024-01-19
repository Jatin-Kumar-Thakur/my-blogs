'use client'
import { addUser } from "@/lib/action"
import { useFormState } from "react-dom"

const AdminUserForm = () => {
    const [state,formAction] =useFormState(addUser,undefined)
    return (
        <div className="">
            <h1 className="text-2xl font-bold my-2">Add New User</h1>
            <div className="">
                <form action={formAction} className="flex flex-col gap-4">
                    <input type="text" name="username" placeholder="Enter name.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="email" placeholder="Email..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="img" placeholder="Image"
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="password" name="password" placeholder="Password..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <button className="bg-[var(--btn)] w-[80%] p-2 rounded-md">Submit</button>
                    {
                        state && state.error
                    }
                </form>
            </div>
        </div>
    )
}

export default AdminUserForm
