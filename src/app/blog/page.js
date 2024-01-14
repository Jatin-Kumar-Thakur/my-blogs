'use client'
import Postcard from "@/components/postcard/postcard";
import { useState } from "react";
import Loading from "../loading";

const Blog = () => {
    const [temp,setTemp]=useState(false);
    setTimeout(()=>{
        setTemp(true);
    },2000)

    return (
        temp ?
        <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
            ">
                <Postcard />
            </div>
            
            
        </div>
        :
        <Loading />
    )
}
export default Blog;