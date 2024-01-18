'use client'
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
const Register = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();
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