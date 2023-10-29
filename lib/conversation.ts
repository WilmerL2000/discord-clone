import { db } from "@/lib/db";

/**
 * The function `getOrCreateConversation` finds an existing conversation between two members or creates
 * a new conversation if one does not exist.
 * @param {string} memberOneId - The ID of the first member in the conversation.
 * @param {string} memberTwoId - The `memberTwoId` parameter is the ID of the second member in the
 * conversation.
 * @returns a conversation object.
 */
export const getOrCreateConversation = async (memberOneId: string, memberTwoId: string) => {
    let conversation = await findConversation(memberOneId, memberTwoId) || await findConversation(memberTwoId, memberOneId);

    if (!conversation) {
        conversation = await createNewConversation(memberOneId, memberTwoId);
    }

    return conversation;
}

/**
 * The function `findConversation` is an asynchronous function that takes two member IDs as parameters
 * and tries to find a conversation between those two members in a database.
 * @param {string} memberOneId - The `memberOneId` parameter is the ID of the first member in the
 * conversation.
 * @param {string} memberTwoId - The `memberTwoId` parameter is the ID of the second member in the
 * conversation.
 * @returns The function `findConversation` returns a Promise that resolves to the conversation object
 * if found, or null if an error occurs.
 */
const findConversation = async (memberOneId: string, memberTwoId: string) => {
    try {
        return await db.conversation.findFirst({
            where: {
                AND: [
                    { memberOneId: memberOneId },
                    { memberTwoId: memberTwoId },
                ]
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    }
                },
                memberTwo: {
                    include: {
                        profile: true,
                    }
                }
            }
        });
    } catch {
        return null;
    }
}

/**
 * The function creates a new conversation between two members and includes their profiles.
 * @param {string} memberOneId - The ID of the first member in the conversation.
 * @param {string} memberTwoId - The `memberTwoId` parameter is the ID of the second member in the
 * conversation.
 * @returns a Promise that resolves to the newly created conversation object.
 */
const createNewConversation = async (memberOneId: string, memberTwoId: string) => {
    try {
        return await db.conversation.create({
            data: {
                memberOneId,
                memberTwoId,
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    }
                },
                memberTwo: {
                    include: {
                        profile: true,
                    }
                }
            }
        })
    } catch {
        return null;
    }
}