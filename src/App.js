/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import Reactions from './components/Reactions';

function App() {
    const [reactions, setReactions] = useState([]);
    const [reactionCounts, setReactionCounts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://artful-iudex.herokuapp.com/reactions');
            const data = await response.json();

            setReactions(data);
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
        }
    }

    return (
        <div className="App">
            {reactions.length === 0
                ? <h1>Loading...</h1>
                : (
                    <>
                        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />

                        <Reactions
                            reactions={reactions}
                            reactionCounts={reactionCounts}
                            onSelect={(reaction) => handleReactionClick(reaction)}
                        />
                    </>
                )}
        </div>
    );
}

export default App;
