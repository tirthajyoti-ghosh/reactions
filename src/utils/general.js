export const currentUserReactions = (userContentReactions, user) => {
    const userReactions = userContentReactions.filter((reaction) => reaction.user_id === user.id);
    return userReactions;
};

export const getReactionCounts = (userContentReactions, currentUser, reactions) => {
    const userReactions = currentUserReactions(userContentReactions, currentUser);

    const counts = reactions.map((reaction) => {
        const singleReactionCount = userContentReactions.filter((userContentReaction) => (
            userContentReaction.reaction_id === reaction.id
        )).length;

        const thisReactionByUser = userReactions.find((userReaction) => (
            userReaction.reaction_id === reaction.id
        ));

        if (thisReactionByUser) {
            return {
                ...reaction,
                count: singleReactionCount,
                active: true,
            };
        }

        return {
            ...reaction,
            count: singleReactionCount,
            active: false,
        };
    });

    return counts;
};
