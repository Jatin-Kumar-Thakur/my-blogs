"use server"
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs"
export const handleGithubLogin = async () => {
    await signIn("github");
}
export const handleGithubLogOut = async () => {
    await signOut();
}

export const register = async (previousState,formData) => {
    const { username, email, password, passwordagain } = Object.fromEntries(formData);
    if (password != passwordagain) {
        return {error:"Password do not Match"};
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
            return {success:true};
        }
        else{
            return {error:"User is Already Present"};
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const login = async (previousState,formData)=>{
    const {username,password}=Object.fromEntries(formData);

    try {
        // Using nextAuth
        await signIn("credentials",{username,password});
    } catch (error) {
        console.log(error);
        if(error.message.includes("CredentialsSignIn")){
            return {error:"Invalid username or password"}
        }
        throw {error:"Something Went wrong!"};
    }
}