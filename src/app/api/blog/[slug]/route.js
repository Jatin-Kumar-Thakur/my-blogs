import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (requst, { params }) => {
    const { slug } = params;
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Single post fetching error");
    }
}
export const DELETE = async (requst, { params }) => {
    const { slug } = params;
    try {
        connectToDb();
        await Post.deleteOne({ slug });
        return NextResponse.json("post deleted");
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete post");
    }
}