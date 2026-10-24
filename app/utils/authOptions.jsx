import GoogleProvider from "next-auth/providers/google";
import connectBD from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // inoked on succesful signin
    async signIn({ profile }) {
      // 1. connect to the database
      await connectBD();
      // 2. Check if user excist
      const userExists = await User.findOne({ email: profile.email });
      // 3. if not, create user
      if (!userExists) {
        // Truncate username if to long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4. Return true to allow signin
      return true;
    },
    // Session callback function that modifies thr session object
    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session.user.email });
      // 2. Assign user id from the session
      session.user.id = user._id.toString();
      // 3. Return sesson
      return session;
    },
  },
};
