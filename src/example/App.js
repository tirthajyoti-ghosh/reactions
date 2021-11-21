/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import Content from './Content';
import { getReactionCounts } from './utils/general';

function App() {
    const [data, setData] = useState({ reactions: [], users: [] });
    const [reactionCounts, setReactionCounts] = useState({});
    const [currentUser, setCurrentUser] = useState({});

    // Get user content reactions every time current user changes
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://artful-iudex.herokuapp.com/user_content_reactions');
            const userContentReactions = await response.json();

            // List of contents (for now it is hard coded)
            const contents = [1, 2];
            // Store reaction counts by content ids
            const counts = {};
            // Loop through all contents
            for (let i = 0; i < contents.length; i += 1) {
                // Get the reactions for the current content
                const reactionsByContent = userContentReactions.filter((userContentReaction) => (
                    userContentReaction.content_id === contents[i]
                ));
                // Pass only the reactions for the current content to getReactionCounts, current user and all reactions
                const reactionCounts = getReactionCounts(reactionsByContent, currentUser, data.reactions);
                // Store the reaction counts by content id
                counts[contents[i]] = reactionCounts;
            }

            setReactionCounts(counts);
        };

        if (Object.keys(currentUser).length !== 0) {
            getData();
        }
    }, [currentUser]);

    // Get all reactions and users on mount
    useEffect(() => {
        async function fetchData() {
            let reactions;
            let users;

            const promises = [
                (async () => {
                    const response = await fetch('https://artful-iudex.herokuapp.com/reactions');
                    const data = await response.json();

                    reactions = data;
                })(),
                (async () => {
                    const response = await fetch('https://artful-iudex.herokuapp.com/users');
                    const data = await response.json();

                    users = data;
                })(),
            ];
            await Promise.all(promises);

            setData({ reactions, users });
            setCurrentUser(users[0]);
        }

        fetchData();
    }, []);

    async function saveReaction(reaction, contentId) {
        const response = await fetch('https://artful-iudex.herokuapp.com/user_content_reactions', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                reaction_id: reaction.id,
                content_id: contentId,
            }),
        });
        const data = await response.json();

        return data;
    }

    async function handleReactionClick(reaction, contentId) {
        // Find index of selected reaction in reactionCounts under selected contentId
        const index = reactionCounts[contentId].findIndex((item) => item.emoji === reaction.emoji);

        if (index > -1) {
            const selectedReaction = reactionCounts[contentId][index];

            // If the selected reaction is already active (already been clicked by user),
            if (selectedReaction.active) {
                // Send DELETE /user_content_reactions/{ID} request to remove the reaction
                await fetch(`https://artful-iudex.herokuapp.com/user_content_reactions/${selectedReaction.id}`, {
                    method: 'DELETE',
                    mode: 'cors',
                });

                // If the selected reaction is the last one in the array, remove it
                if (selectedReaction.count === 1) {
                    // Remove the reaction from reactionCounts under selected contentId
                    setReactionCounts({
                        ...reactionCounts,
                        [contentId]: reactionCounts[contentId].filter((item) => item.emoji !== reaction.emoji),
                    });
                } else {
                    // Decrement the reaction count under selected contentId and set active to false
                    const newReactionCounts = [...reactionCounts[contentId]];
                    newReactionCounts[index].active = false;
                    newReactionCounts[index].count -= 1;

                    setReactionCounts({
                        ...reactionCounts,
                        [contentId]: newReactionCounts,
                    });
                }
            } else {
                // Send POST /user_content_reactions request to add new reaction
                const { id: newReactionId } = await saveReaction(reaction, contentId);

                // If the selected reaction is not active, increment the reaction count under selected contentId
                // and set active to true (as it has been clicked by user)
                const newReactionCounts = [...reactionCounts[contentId]];
                newReactionCounts[index].id = newReactionId;
                newReactionCounts[index].active = true;
                newReactionCounts[index].count += 1;

                setReactionCounts({
                    ...reactionCounts,
                    [contentId]: newReactionCounts,
                });
            }
        } else {
            // Send POST /user_content_reactions request to add new reaction
            const { id: newReactionId } = await saveReaction(reaction, contentId);

            // If the reaction under selected contentId does not exist, add it to the list
            setReactionCounts({
                ...reactionCounts,
                [contentId]: [
                    ...reactionCounts[contentId],
                    {
                        id: newReactionId,
                        emoji: reaction.emoji,
                        count: 1,
                        active: true,
                    },
                ],
            });
        }
    }

    return (
        <div className="App">
            {data.reactions.length === 0 && Object.keys(currentUser).length === 0
                ? <h1>Loading...</h1>
                : (
                    <>
                        <h2>
                            Current user:
                            {' '}
                            {`${currentUser.first_name} ${currentUser.last_name}`}
                        </h2>

                        <select onChange={(e) => setCurrentUser(data.users[e.target.value])}>
                            {data.users.map((user, index) => (
                                <option key={user.id} value={index}>
                                    {`${user.id} - ${user.first_name} ${user.last_name}`}
                                </option>
                            ))}
                        </select>

                        {[1, 2].map((contentId) => (
                            <Content
                                key={contentId}
                                reactions={data.reactions}
                                reactionCounts={reactionCounts[contentId] || []}
                                handleReactionClick={(reaction) => handleReactionClick(reaction, contentId)}
                            />
                        ))}
                    </>
                )}
        </div>
    );
}

export default App;
