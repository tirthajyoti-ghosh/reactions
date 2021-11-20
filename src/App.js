/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import Reactions from './components/Reactions';
import { getReactionCounts } from './utils/general';

function App() {
    const [data, setData] = useState({
        reactions: [],
        users: [],
        userContentReactions: [],
    });
    const [reactionCounts, setReactionCounts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://artful-iudex.herokuapp.com/user_content_reactions');
            const userContentReactions = await response.json();

            const counts = getReactionCounts(userContentReactions, currentUser, data.reactions);
            setReactionCounts(counts);
        };

        if (Object.keys(currentUser).length !== 0) {
            getData();
        }
    }, [currentUser]);

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

    function handleReactionClick(reaction) {
        // Find index of selected reaction in reactionCounts
        const index = reactionCounts.findIndex((item) => item.emoji === reaction.emoji);

        if (index > -1) {
            const selectedReaction = reactionCounts[index];

            // If the selected reaction is already active (already been clicked by user),
            if (selectedReaction.active) {
                // TODO
                // TODO
                // TODO Send DELETE /user_content_reactions/{ID} request here
                // TODO
                // TODO

                // If the selected reaction is the last one in the array, remove it
                if (selectedReaction.count === 1) {
                    // Remove the reaction from the list
                    setReactionCounts(reactionCounts.filter((item) => item.emoji !== reaction.emoji));
                } else {
                    // Decrement the reaction count and set active to false
                    const newReactionCounts = [...reactionCounts];
                    newReactionCounts[index].active = false;
                    newReactionCounts[index].count -= 1;

                    setReactionCounts(newReactionCounts);
                }
            } else {
                // TODO
                // TODO
                // TODO Send POST /user_content_reactions request here
                // TODO
                // TODO

                // If the selected reaction is not active, increment the reaction count
                // and set active to true (as it has been clicked by user)
                const newReactionCounts = [...reactionCounts];
                newReactionCounts[index].active = true;
                newReactionCounts[index].count += 1;

                setReactionCounts(newReactionCounts);
            }
        } else {
            // If the reaction does not exist, add it to the list
            setReactionCounts([
                ...reactionCounts,
                {
                    emoji: reaction.emoji,
                    count: 1,
                    active: true,
                },
            ]);

            // TODO
            // TODO
            // TODO Send POST /user_content_reactions request here
            // TODO
            // TODO
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
                        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />

                        <Reactions
                            reactions={data.reactions}
                            reactionCounts={reactionCounts}
                            onSelect={(reaction) => handleReactionClick(reaction)}
                        />
                    </>
                )}
        </div>
    );
}

export default App;
