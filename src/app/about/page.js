import Image from "next/image";

const Page = () => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="w-full flex flex-col justify-around gap-7">
                <p className=" text-2xl font-bold text-[var(--btn)]">About Agency</p>
                <h1 className="text-2xl  font-bold lg:text-5xl">
                    SomeThing is Going on here soo please get out
                </h1>
                <p className="text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint reprehenderit ratione molestias nobis necessitatibus 
                    ipsa excepturi architecto, eveniet in facilis ullam. Repellat 
                    ab voluptate ex veritatis enim velit illo suscipit. 
                </p>
                <div className="flex justify-between">
                    <div className="">
                        <p className="text-[var(--btn)] font-bold text-xl mb-1">20 k+</p>
                        <p className="text-xs text-slate-400">Years of experience</p>
                    </div>
                    <div className="">
                        <p className="text-[var(--btn)] font-bold text-xl mb-1">300 k+</p>
                        <p className="text-xs  text-slate-400">People reached.</p>
                    </div>
                    <div className="">
                        <p className="text-[var(--btn)] font-bold text-xl mb-1 ">2 k+</p>
                        <p className="text-xs text-slate-400">Service and plugins</p>
                    </div>
                </div>
            </div>
            <div className=" sm:w-full sm:flex sm:justify-end hidden ">
                <Image
                    src='/about.png'
                    alt='home img'
                    width={400}
                    height={400}
                    className="realtive right-0"
                />
            </div>
        </div>
    )
}
export default Page;