/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import Reactions from '../../components/Reactions';

function Content({ reactions, reactionCounts, handleReactionClick }) {
    return (
        <div>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />

            <Reactions
                reactions={reactions}
                reactionCounts={reactionCounts}
                onSelect={(reaction) => handleReactionClick(reaction)}
            />
        </div>
    );
}

export default Content;
