/* eslint-disable react/prop-types */
import React from 'react';

function CounterGroups({ reactionCounts, onSelect }) {
    return (
        <div className="reactions-emoji-groups">
            { reactionCounts.map((reactionCount) => {
                const { emoji, count, active } = reactionCount;

                return count > 0 ? (
                    <button
                        type="button"
                        key={emoji}
                        onClick={() => onSelect(reactionCount)}
                        className={active ? 'active' : ''}
                    >
                        { emoji }
                        ·
                        { count }
                    </button>
                ) : null;
            }) }
        </div>
    );
}

export default CounterGroups;
