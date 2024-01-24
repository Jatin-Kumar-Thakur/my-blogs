"use server"
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs"
// import { redirect } from "next/navigation";


export const handleGithubLogin = async () => {
    await signIn("github");
}
export const handleGithubLogOut = async () => {
    await signOut();
}

export const register = async (previousState, formData) => {
    const { username, email, password, passwordagain } = Object.fromEntries(formData);
    if (password != passwordagain) {
        return { error: "Password do not Match" };
    }

    try {
        connectToDb();
        const user = await User.findOne({ username });
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            })
            await newUser.save();
            return { success: true };
        }
        else {
            return { error: "User is Already Present" };
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        // Using nextAuth
        await signIn("credentials", { username, password, callbackUrl: '/', redirect: false });
        revalidatePath("/login");
        revalidatePath("/");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.log(error);
        if (error.message.includes("CredentialsSignIn")) {
            return { error: "Invalid username or password" }
        }
        throw { error: "Something Went wrong!" };
    }
}


// *********************************** ADD POST*******************

export const addPost = async (prevState, formData) => {
    const { title, desc, slug, userId, img } = Object.fromEntries(formData);
    const slg=slug.replaceAll(' ','-');
    try {
        connectToDb();
        const newPost = new Post({
            title, desc, slug:slg, userId, img
        });
        await newPost.save();
        // console.log("Post Successfully");
        revalidatePath("/blog")
        revalidatePath("/admin")

    } catch (error) {
        console.log(error);
        return { error: "something went wrong While adding post" }
    }
}

// ******************************** Delete Post *********************************

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("Post is Deleted");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "something went wrong While deleting post" }
    }
}


// *********************************** ADD user*******************

export const addUser = async (prevState, formData) => {

    const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
    try {
        connectToDb();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, email, password: hashedPassword, img, isAdmin
        });
        const user = await User.findOne({ username });
        if (!user) {
            await newUser.save();
            console.log("User added Successfully");
        }
        else {
            console.log("user Already exists");
        }
        revalidatePath("/admin")
    } catch (error) {
        console.log(error);
        return { error: "something went wrong While adding user" }
    }
}

// ******************************** Delete User *********************************

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id);
        console.log("User is Deleted");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "something went wrong While deleting User" }
    }
}
