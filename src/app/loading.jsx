import { DotLoader } from "react-spinners";
const Loading = () => {
    return (
        <div className="flex h-[calc(100vh-200px)] justify-center items-center">
            <DotLoader color="#36d7b7" />
        </div>
    )
}

export default Loading;