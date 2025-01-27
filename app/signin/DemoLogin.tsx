"use client";

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { users } from "@/data/users";
import { Select } from "@/primitives/Select";
import styles from "./signin.module.css";
// Used only for demo authentication, displays a dropdown of users
export function DemoLogin() {
  const { user } = useUser();
  // const [data] = useCollection(
  //   user &&
  //     query(
  //       collectionGroup(db, "rooms"),
  //       where("userId", "==", user?.emailAddresses[0].toString())
  //     )
  // );
  console.log("CLERCK USER: " + user);
  return (
    <div className={styles.actions}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gray-400 hover:bg-gradient-to-r from-gray-900 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <SignOutButton />
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </Link>
      </SignedIn>
      <Select
        items={users.map((user) => ({ value: user.id, title: user.name }))}
        onChange={(email) => {
          signIn("credentials", { email });
        }}
        placeholder="Choose a profile…"
      />
    </div>
  );
}
