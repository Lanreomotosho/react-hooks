import React, { useState } from 'react'

const NewSongForm = () => {
    const [title, setTitle] = useState ('');
  return (
<form onSubmit={}>
    <label>Song name:</label>
    <input type="text" required  onChange={(e) => {}} />
    <imput type="submit" value="add song" />
</form>
  );
}

export default NewSongForm