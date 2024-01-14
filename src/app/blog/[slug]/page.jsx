import Image from "next/image";

const Slug = () => {
    return (
        <div className="flex flex-col gap-24 mt-5
            md:flex-row md:h-[calc(100vh-200px)]
        ">
            <div className=" h-[400px] relative
                md:h-[calc(100vh - 200px)]
                md:basis-1/3
            ">
                <Image
                    src='/post.jpg'
                    alt=""
                    fill
                    className="object-contain md:object-cover"
                />
            </div>
            <div className=" md:overflow-y-scroll 
                md:basis-2/3
            ">
                <h1 className="text-4xl font-bold mb-5">Title</h1>
                <div className=" h-10 flex mb-5 items-center gap-5">
                    <Image
                        src='/noavatar.png'
                        width={40}
                        height={40}
                        className="rounded-full "
                    />
                    <div className="font-medium">
                        <p className="text-sm text-gray-400">Author</p>
                        <p>Jatin Kumar</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-gray-400">Published</p>
                        <p>14 Jan 2024</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1>Desc</h1>
                    <p className="text-xl mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo nam quod, quasi architecto praesentium labore
                        beatae ipsam eius deleniti. Sint vero molestias doloremque
                        eum, illo ipsum nostrum dicta possimus voluptates necessitatibus
                        deleniti fuga aliquid! Impedit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo nam quod, quasi architecto praesentium labore
                        beatae ipsam eius deleniti. Sint vero molestias doloremque
                        eum, illo ipsum nostrum dicta possimus voluptates necessitatibus
                        deleniti fuga aliquid! Impedit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo nam quod, quasi architecto praesentium labore
                        beatae ipsam eius deleniti. Sint vero molestias doloremque
                        eum, illo ipsum nostrum dicta possimus voluptates necessitatibus
                        deleniti fuga aliquid! Impedit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo nam quod, quasi architecto praesentium labore
                        beatae ipsam eius deleniti. Sint vero molestias doloremque
                        eum, illo ipsum nostrum dicta possimus voluptates necessitatibus
                        deleniti fuga aliquid! Impedit!

                    </p>
                </div>
            </div>
        </div>
    )
}
export default Slug;