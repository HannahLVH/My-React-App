import React from "react";

function Track({track}) {
    return (
    <ul className="Track">
        <li>Track name: {track.name}</li>
        <li>Track length: {track.length} sec</li>
    </ul>
    )
}

export default Track;