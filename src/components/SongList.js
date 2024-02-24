import React, { useState } from 'react';

const SongList = () => {
    const [ songs, setSongs] = useState {[
        { title: 'amlost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ]};
    const addSong = () => {
        setSongs([...songs, { title: 'new songs', id: uuid() }])
    }
    return ( 
        <div className='song-list'>
            <ul>
            {songs.map(songs => {
                return ( <li key={songs.id}>{songs.title}</li> );
            })}
                <li>this wild darkness</li>
                <li>memory gospel</li>
            </ul>
            <button onClick={addSong}>Add a song</button>
            </div>
     );
}
export default SongList;

