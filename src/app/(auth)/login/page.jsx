'use client'
import { handleGithubLogin, login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const Login = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();
    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);
    return (
        <div className="flex justify-center items-center w-full">
            <div className="md:w-[50%] rounded-lg flex flex-col justify-center items-center  gap-5 pb-5">
                <div className="flex flex-col items-center justify-center w-full ">
                    <h1 className="text-3xl font-bold m-5">Login</h1>
                    <form action={formAction} className="flex flex-col gap-4 w-full justify-center items-center
                                        md:w-[60%]">
                        <input type="text" name="username" placeholder="Username"
                            className="w-full p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]"
                        />
                        <input type="password" name="password" placeholder="Password"
                            className="w-full p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]"
                        />
                        <button className="bg-[var(--btn)] w-full p-2 rounded-md">Login</button>
                    </form>
                </div>
                <form action={handleGithubLogin} className="w-full flex justify-center flex-nowrap">
                    <button className="bg-red-500 p-2 w-full md:w-[60%] rounded-lg">Login With Github</button>
                </form>
                {
                    state?.error &&
                    <p>
                        {state.error}
                    </p>
                }
                <p><Link href="/register">Dont have an Account?</Link></p>
            </div>
        </div>
    )
}
export default Login;