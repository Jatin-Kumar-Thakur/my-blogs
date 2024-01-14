import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-full flex flex-col justify-center gap-8">
        <h1 className="text-5xl font-bold">SomeThing is Going on here soo please get out</h1>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium error perferendis excepturi possimus at, in esse!

        </p>
        <p className="flex gap-5">
          <button className="bg-[var(--btn)] py-3 px-3 rounded-md text-sm">button A</button>
          <button className="bg-[var(--btn)] py-3 px-3 rounded-md text-sm">button b</button>
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
  )
};

export default Home;
