import Sidebar from "@/components/adminsidebar/Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex py-5" ><Sidebar /></div>
            <div className="flex w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout;