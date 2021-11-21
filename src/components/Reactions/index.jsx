/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import CounterGroups from './CounterGroups';
import Selectors from './Selectors';

import './style.scss';

function Reactions({
    reactions,
    reactionCounts,
    onSelect,
}) {
    const [showSelector, setShowSelector] = useState(false);

    return (
        <div className="reactions">
            {/* Reaction counter groups */}
            <CounterGroups reactionCounts={reactionCounts} onSelect={onSelect} />

            {/* Reactions selector */}
            <Selectors
                reactions={reactions}
                onSelect={onSelect}
                showSelector={showSelector}
                setShowSelector={setShowSelector}
            />
        </div>
    );
}

export default Reactions;
