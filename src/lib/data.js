import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// for find all the posts
export const getPosts = async () => {
    noStore();
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Posts");
    }
}

// This is for Find a specific Post 
export const getPost = async (slug) => {
    noStore();
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Post");
    }
}
export const getUserPosts = async (userId) => {
    try {
        connectToDb();
        const post = await Post.find({userId:userId});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Post");
    }
}
export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}
export const getUserByEmail = async (email) => {
    try {
        connectToDb();
        const user = await User.findOne({email});
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}
export const getUserById=async(id)=>{
    try {
        connectToDb();
        const user=await User.findOne({_id:id});
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user by id!");
    }
}
export const getAllUsers = async () => {
    noStore();
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch All the Users");
    }
}