import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  // Integrate to Strapi
  session: { strategy: "jwt" },
  callbacks: {
    async session({ user, session, token }) {
        session.user = token as any;
        /* @ts-ignore */
        session.user.id = user ? user.id : null;
        return Promise.resolve(session);
    },
    
    async jwt({ token, user, account }) {
        const isSignIn = user ? true : false;
        if (isSignIn && account) {
            try {
                console.log("Google Account >>>>>>>>>>>>>> ", account);
                const public_url = process.env.STRAPI_PUBLIC_API_URL;
                const response = await fetch(
                    `${public_url}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
                );
                const data = await response.json();
                console.log("Strapi Callback Data >>>>>>>>>>>>>> ", data);
                token.jwt = data.jwt;
                token.id = data.user.id;
            } catch (error) {
                console.error('Fetch failed:', error);
            }
        }
        return Promise.resolve(token);
    },
},
secret: process.env.NEXTAUTH_SECRET as string

};