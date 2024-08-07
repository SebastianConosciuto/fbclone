import NextAuth from "next-auth"
import Prov from "next-auth/providers"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)