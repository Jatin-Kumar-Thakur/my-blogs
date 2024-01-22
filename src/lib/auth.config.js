// import { redirect } from "next/navigation";

import { connectToDb } from "./utils";

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
                // console.log(session.user);
            }
            return session;
        },
        async authorized({ auth, request }) {
            const user = auth?.user;
            // console.log(auth)
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
            if (isOnAdminPanel && !user?.isAdmin) {
                return true;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
            if (isOnBlogPage && !user) {
                return false;
            }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true
        },
    },
};