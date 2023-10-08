import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

/**
 * The function `currentProfile` retrieves the profile of the currently authenticated user from the
 * database.
 * @returns The function `currentProfile` returns the profile object if the user is authenticated and
 * has a profile in the database. If the user is not authenticated or does not have a profile, it
 * returns `null`.
 */
export const currentProfile = async () => {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}