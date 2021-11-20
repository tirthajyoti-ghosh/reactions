/* eslint-disable react/prop-types */
import Tooltip from './Tooltip';

function Selectors({ reactions, onSelect, setShowSelector }) {
    return (
        <div className="reactions-selectors">
            {reactions.map((reaction) => {
                const { emoji, name } = reaction;

                return (
                    <Tooltip content={name} key={name}>
                        <button
                            type="button"
                            onClick={() => {
                                setShowSelector(false);
                                onSelect(reaction);
                            }}
                        >
                            {emoji}
                        </button>
                    </Tooltip>
                );
            })}
        </div>
    );
}

export default Selectors;
