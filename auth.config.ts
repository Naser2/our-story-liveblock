import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/lib/database";

// interface DatabaseUser {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
//   groupIds: string[];
//   color: string;
// }

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   avatar: string;
// }

export const authConfig: NextAuthConfig = {
  // Configure one or more authentication providers
  // More info: https://next-auth.js.org/providers/
  providers: [
    // CredentialsProvider is used for the demo auth system
    // Replace this with a real provider, e.g. GitHub, Auth0
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string") {
          throw new Error("No credentials or email");
        }

        const user = await getUser(credentials.email);

        if (!user || user === null) {
          throw new Error("User not found");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.id,
          image: user.avatar,
        };
      },
    }),
  ],

  trustHost: true,
};
