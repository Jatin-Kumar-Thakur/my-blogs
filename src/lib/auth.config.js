export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            // console.log(account);
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        // async jwt({ token, account, user }) {
        //     // Persist the OAuth access_token and or the user id to the token right after signin
        //     if (account) {
        //         // token.accessToken = account.access_token
        //         token.id = user.id
        //     }
        //     return token
        // },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }) {
            const userD = auth?.user;
            // console.log();


            // console.log(auth)
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnUserPage = request.nextUrl?.pathname.startsWith("/aboutuser");


            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
            if (isOnAdminPanel && !userD?.isAdmin) {
                // console.log(userD.isAdmin);
                return true;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
            if (isOnBlogPage && !userD) {
                return false;
            }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
            if (isOnLoginPage && userD) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // for about page
            if (isOnUserPage && !userD) {
                return false;
            }
            return true
        },
    },
};