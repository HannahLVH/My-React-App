import React from "react";
import Track from "./Track";

function Album({album}) {
    return (
        <div className="Album">
            <h2>Album: {album.name}</h2>
            <p>Artist: {album.artist.name}</p>
            {album.tracks.map((track) => (
            <Track track={track} />
            ))}
         </div>
    )
}

export default Album;