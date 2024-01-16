// 'use client'
import Postcard from "@/components/postcard/postcard";
// import { useState } from "react";
// import Loading from "../loading";
import { getPosts } from "@/lib/data";

const Blog = async () => {
    // const [temp, setTemp] = useState(false);
    // setTimeout(() => {
    //     setTemp(true);
    // }, 2000)

    const posts = await getPosts();

    return (
        // temp ?
            <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
                {
                    posts.map((post) => (
                        <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
                            "
                            key={post.id}
                        >   
                            <Postcard post={post}/>
                        </div>
                    ))
                }

            </div>
            // :
            // <Loading />
    )
}
export default Blog;