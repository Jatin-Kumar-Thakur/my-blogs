'use client'
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom"

const AdminPostForm = ({userId}) => {
    const [state, formAction] = useFormState(addPost, undefined);
    return (
        <div className="">
            <h1 className="text-2xl font-bold my-2">Add New Post</h1>
            <div className="">
                <form action={formAction} className="flex flex-col gap-4">
                    <input type="hidden"  name="userId" value={userId}/>
                    <input type="text" name="title" placeholder="Enter title.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="slug" placeholder="Slug..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="img" placeholder="Image"
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <textarea type="text" rows='6' name="desc" placeholder="Decsription..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <button className="bg-[var(--btn)] w-[80%] p-2 rounded-md">Submit</button>
                    {state && state.error}
                </form>
            </div>
        </div>
    )
}

export default AdminPostForm;