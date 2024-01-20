'use client'
import { addUser } from "@/lib/action"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase";


const storage = getStorage(app);
const AdminUserForm = () => {
    const [image, setImage] = useState(null);
    const [media , setMedia]=useState("");

    useEffect(() => {
        const upload = () => {
            const name=new Date().getTime+image.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                    });
                }
            );

        }
        image && upload();
    }, [image])
    const [state, formAction] = useFormState(addUser, undefined)
    return (
        <div className="">
            <h1 className="text-2xl font-bold my-2 text-center">Add New User</h1>
            <div className="">
                <form action={formAction} className="flex flex-col gap-4 items-center">
                    <input type="text" name="username" placeholder="Enter name.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="email" placeholder="Email..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="hidden" name="img" value={media ? media : undefined}/>
                    <input type="file" placeholder="Image" onChange={(e) => setImage(e.target.files[0])}
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="password" name="password" placeholder="Password..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <select name="idAdmin" className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]">
                        <option value="false">IsAdmin?</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
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
