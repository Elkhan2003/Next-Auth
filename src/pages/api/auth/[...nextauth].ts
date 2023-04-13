import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "417722966225-rf8a10e9oj9dh3q9dehmovfhv1jqhf19.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})