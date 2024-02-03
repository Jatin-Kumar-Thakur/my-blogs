'use client'
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase";

const storage = getStorage(app);
const Register = () => {

    const [image, setImage] = useState(null);
    const [media, setMedia] = useState("");

    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + image.name;
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
                    console.log("error while uploading image", error);
                },
                () => {
                    console.log(uploadTask.snapshot.ref)
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                    });
                }
            );

        }
        image && upload();
    }, [image])

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);
    return (
        <div className="flex justify-center w-full">
            <form action={formAction} className="flex flex-col gap-4 w-full justify-center items-center
                                        md:w-[70%]">
                <input type="text" name="username" placeholder="Enter name.."
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]" />
                <input type="text" name="email" placeholder="Email address.."
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]" />
                <input type="hidden" name="img" value={media ? media : ""} />
                <input type="file" placeholder="Image" onChange={(e) => setImage(e.target.files[0])}
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                />
                <input type="password" name="password" placeholder="Password"
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]" />
                <input type="text" name="passwordagain" placeholder="Password Again"
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]" />
                <button className="bg-[var(--btn)] w-[80%] p-2 rounded-md">Register</button>
                {
                    state?.error &&
                    <p>
                        {state.error}
                    </p>
                }
                <p><Link href="/login">Already have an Account?</Link></p>
            </form>
        </div>
    )
}
export default Register;