import { usePathname } from "next/navigation";
import Link from "next/link";
const NavLink = ({item}) => {
    const pathname = usePathname();
    return (
        <div className={`text-center rounded-full py-2 px-3 font-medium min-w-24 ${pathname === item.path && ('bg-[var(--btn)]' )}`}>
            <Link
                href={item.path}
            >{item.title}</Link>
        </div>
    )
}

export default NavLink
