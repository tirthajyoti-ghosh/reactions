/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import Reactions from '../../components/Reactions';
import './style.scss';

function Content({ reactions, reactionCounts, handleReactionClick }) {
    return (
        <div className="content">
            <div className="post" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut et nesciunt amet eaque, nam voluptatum quae asperiores debitis! Alias possimus reiciendis quaerat sunt minima sint molestias exercitationem ad aut!
                Molestias facere numquam architecto fuga itaque ipsam repellat maiores, odio doloremque corporis? Ea quidem voluptatum maxime consequuntur nam, facilis ipsa id harum culpa ratione minus sequi sit dolore beatae repellat!
            </p>

            <Reactions
                reactions={reactions}
                reactionCounts={reactionCounts}
                onSelect={(reaction) => handleReactionClick(reaction)}
            />
        </div>
    );
}

export default Content;
