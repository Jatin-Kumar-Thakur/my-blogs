import Image from "next/image";
import style from '../../style/about.module.css'

const Page = () => {
    return (
        <div className={`w-full flex justify-between items-center ${style.aboutcontainer}`}>
            <div className="w-full flex flex-col justify-around gap-7">
                <p className=" text-2xl font-bold text-[var(--btn)]">About Agency</p>
                <h1 className="text-2xl  font-bold lg:text-5xl">
                    Your way Create a unique and beautiful blog easily.
                </h1>
                <p className="text-sm ">
                    Welcome to our vibrant blog community,
                    where words come alive and ideas flourish.
                    Immerse yourself in a diverse tapestry of perspectives,
                    passions, and stories. Explore the intersection of knowledge
                    and creativity as our contributors share insights, experiences,
                    and thought-provoking content. Join us in fostering a dynamic space for inspiration,
                    connection, and the joy of discovery.
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
            <div className=" sm:w-full md:flex sm:justify-end">
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