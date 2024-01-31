import MostRecent from "@/components/homePage/mostrecent";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="w-full flex flex-col-reverse justify-between items-center gap-7
                    sm:flex-row sm:gap-0">
        <div className="w-full flex flex-col justify-center gap-8">
          <h1 className="text-2xl font-bold
                      lg:text-5xl">
            Your way Create a unique and beautiful blog easily.
          </h1>
          <p className="text-sm ">
            Welcome to our vibrant blog community, <br />
            where words come alive and ideas flourish.


          </p>
          <p className="flex gap-5">
          <Link href='/about'>
              <span className="bg-[var(--btn)] py-3 px-5 rounded-md">About</span>
            </Link>
            <Link href='/blog'>
              <span className="bg-[var(--btn)] py-3 px-5 rounded-md">Blogs</span>
            </Link>
          </p>
          <Image
            src='/brands.png'
            alt="brand"
            width={500}
            height={80}

          />
        </div>
        <div className=" w-full flex justify-end">
          <Image
            src='/hero.gif'
            alt='home img'
            width={400}
            height={400}
            className="realtive right-0"
          />
        </div>
      </div>
      {/* <div className=""> */}
      <MostRecent />
      {/* </div> */}
    </div>
  )
};

export default Home;
