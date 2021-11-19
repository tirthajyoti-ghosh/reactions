/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Tooltip from '../Tooltip';
import './style.scss';

function Reactions({
    reactions,
    reactionCounts,
    onSelect,
}) {
    const [showSelector, setShowSelector] = useState(false);

    return (
        <div className="reactions">
            {/* Reactions selector */}
            {showSelector ? (
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
            ) : null }

            {/* Reaction counter groups */}
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

            <button onClick={() => setShowSelector(true)} type="button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.77427 11C6.72066 10.9984 5.74512 10.4442 5.20427 9.54L4.34927 10.04C5.07329 11.2401 6.37266 11.9738 7.77427 11.9738C9.17589 11.9738 10.4753 11.2401 11.1993 10.04L10.3443 9.54C9.80342 10.4442 8.82788 10.9984 7.77427 11ZM14.7743 2H12.7743V0H11.7743V2H9.77427V3H11.7743V5H12.7743V3H14.7743V2ZM5.52427 5.5C4.83392 5.5 4.27427 6.05964 4.27427 6.75C4.27427 7.44036 4.83392 8 5.52427 8C6.21463 8 6.77427 7.44036 6.77427 6.75C6.77696 6.41766 6.64613 6.09815 6.41112 5.86315C6.17612 5.62814 5.85661 5.49731 5.52427 5.5ZM10.0243 5.5C9.33392 5.5 8.77427 6.05964 8.77427 6.75C8.77427 7.44036 9.33392 8 10.0243 8C10.7146 8 11.2743 7.44036 11.2743 6.75C11.277 6.41766 11.1461 6.09815 10.9111 5.86315C10.6761 5.62814 10.3566 5.49731 10.0243 5.5ZM13.5793 6.5C13.7056 6.9901 13.7711 7.49389 13.7743 8C13.7743 11.3137 11.088 14 7.77427 14C4.46056 14 1.77427 11.3137 1.77427 8C1.77427 4.68629 4.46056 2 7.77427 2V1C4.80467 0.998983 2.15761 2.87179 1.17018 5.67242C0.182754 8.47304 1.06988 11.5919 3.38346 13.4536C5.69703 15.3153 8.93349 15.5146 11.458 13.9508C13.9825 12.3871 15.2456 9.40062 14.6093 6.5H13.5793Z" fill="black" />
                </svg>
            </button>
        </div>
    );
}

export default Reactions;
