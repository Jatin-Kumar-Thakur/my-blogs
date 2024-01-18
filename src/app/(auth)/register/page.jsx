'use client'
import { register } from "@/lib/action";

const Register = async () => {

    return (
        <div className="flex justify-center w-full">
            <form action={register} className="flex flex-col gap-4 w-full justify-center items-center
                                        md:w-[70%]
            ">
                <input type="text" name="username" placeholder="Enter name.."
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                />
                <input type="text" name="email" placeholder="Email address.."
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                />
                <input type="password" name="password" placeholder="Password"
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                />
                <input type="text" name="passwordagain" placeholder="Password Again"
                    className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                />
                <button className="bg-[var(--btn)] w-[80%] p-2 rounded-md">Register</button>
            </form>
        </div>
    )
}
export default Register;