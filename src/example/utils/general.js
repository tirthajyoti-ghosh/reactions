/* eslint-disable max-len */
export const currentUserReactions = (userContentReactions, user) => {
    const userReactions = userContentReactions.filter((reaction) => reaction.user_id === user.id);
    return userReactions;
};

export const getReactionCounts = (userContentReactions, currentUser, reactions) => {
    const userReactions = currentUserReactions(userContentReactions, currentUser);

    // Loop over all reactions
    const counts = reactions.map((reaction) => {
        // Get the count of the current reaction in the current content's reactions
        const singleReactionCount = userContentReactions.filter((userContentReaction) => (
            userContentReaction.reaction_id === reaction.id
        )).length;

        // Find out if the current user has reacted to the current content with this reaction
        const thisReactionByUser = userReactions.find((userReaction) => (
            userReaction.reaction_id === reaction.id
        ));

        if (thisReactionByUser) {
            return {
                ...reaction,
                // Overriding the id property from the reaction object
                id: thisReactionByUser.id, // This id is from the object in array in GET /user_content_reactions; used for deleting a reaction
                count: singleReactionCount,
                active: true,
            };
        }

        // Notice the below return is not overriding the id property
        // It uses the default id property from the reaction object
        // As creating a new reaction will require the reaction id in POST /user_content_reactions
        return {
            ...reaction,
            count: singleReactionCount,
            active: false,
        };
    });

    return counts;
};
