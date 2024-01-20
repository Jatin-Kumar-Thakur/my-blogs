import Link from "next/link"


const Sidebar = () => {
    return (
        <div className="flex justify-evenly w-full border-b-2 p-2">
            <p><Link href="/admin" className="font-bold text-xl">Posts</Link></p>
            <p><Link href="/admin/users" className="font-bold text-xl">Users</Link></p>
        </div>
    )
}

export default Sidebar
