import { createAuthClient } from "better-auth/react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

export const authClient = createAuthClient({
    // Use the deployed domain in production; empty string falls back to same-origin.
    baseURL,
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();