import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";

/**
 * This function retrieves the user's profile from the database, creates a new profile if it
 * doesn't exist, and returns the profile.
 * @returns The function `initialProfile` returns either an existing profile if it exists, or a newly
 * created profile if it doesn't exist.
 */
export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    });

    if (profile) {
        return profile;
    }

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newProfile;
}