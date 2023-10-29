import { NextApiRequest } from "next";
import { getAuth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

/**
 * The function retrieves the current profile page for a given user ID.
 * @param {NextApiRequest} req - NextApiRequest - The request object containing information about the
 * incoming HTTP request.
 * @returns the profile object if the userId is present, otherwise it returns null.
 */
export const currentProfilePages = async (req: NextApiRequest) => {
    const { userId } = getAuth(req);

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