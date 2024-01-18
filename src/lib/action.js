"use server"
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt"
export const handleGithubLogin = async () => {
    await signIn("github");
}
export const handleGithubLogOut = async () => {
    await signOut();
}

export const register = async (formData) => {
    const { username, email, password, passwordagain } = Object.fromEntries(formData);
    if (password != passwordagain) {
        return ("Password do not Match");
    }

    try {
        connectToDb();
        const user = await User.findOne({ email });
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                username, 
                email, 
                password:hashedPassword,
            })
            await newUser.save();
        }
        else{
            console.log("User is Already Present");
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}