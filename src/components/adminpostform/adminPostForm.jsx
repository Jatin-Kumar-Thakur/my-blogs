'use client'
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom"
import { useEffect, useState } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase";

const storage = getStorage(app);
const AdminPostForm = ({ userId }) => {

    const [state, formAction] = useFormState(addPost, undefined);
    const [image, setImage] = useState(null);
    const [media, setMedia] = useState("");

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + image.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            // console.log('Upload is paused');
                            break;
                        case 'running':
                            // console.log('Upload is running');
                            break;
                    }
                },
                // (error) => {
                // },
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
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold my-2 text-center">Add New Post</h1>
            <div>
                <form action={formAction} className="flex flex-col gap-4 items-center">
                    <input type="hidden" name="userId" value={userId} />
                    <input type="text" name="title" placeholder="Enter title.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="slug" placeholder="Slug..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="hidden" name="img" value={media ? media : undefined} />
                    <input type="file" placeholder="Image" onChange={(e) => setImage(e.target.files[0])}
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <textarea type="text" rows='4' name="desc" placeholder="Decsription..."
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