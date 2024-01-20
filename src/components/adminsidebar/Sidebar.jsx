import Link from "next/link"


const Sidebar = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex justify-evenly border-b-2 p-2 sm:w-[65%] w-full">
                <p><Link href="/admin" className="font-bold text-xl">Posts</Link></p>
                <p><Link href="/admin/users" className="font-bold text-xl">Users</Link></p>
            </div>
        </div>
    )
}

export default Sidebar
