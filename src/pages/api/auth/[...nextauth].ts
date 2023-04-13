import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
	providers: [
		// GoogleProvider({
		// 	clientId:
		// 		"417722966225-rf8a10e9oj9dh3q9dehmovfhv1jqhf19.apps.googleusercontent.com",
		// 	clientSecret: "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"
		// })

		GoogleProvider({
			clientId:
				"417722966225-p2ai9kjph0vhpoh3qtbq73f2tvubi18j.apps.googleusercontent.com",
			clientSecret: "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"
		})
	]
});
