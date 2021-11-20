/* eslint-disable react/prop-types */
import React from 'react';

function CounterGroups({ reactionCounts, onSelect }) {
    return (
        <div className="reactions-emoji-groups">
            { reactionCounts.map((reactionCount) => {
                const { emoji, count, active } = reactionCount;

                return (
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
                );
            }) }
        </div>
    );
}

export default CounterGroups;
