import { handleGithubLogin } from "@/lib/action";


const Login = async () => {

    return (
        <div className="">
            <form action={handleGithubLogin}>
                <button>Login With Github</button>
            </form>
        </div>
    )
}
export default Login;