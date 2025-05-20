import { useState } from 'react';
import './Atv04.css';

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  let nextId = 0;

  return (
    <div className="component-container">
      <h2>List</h2>
      <h3>Inspiring sculptors:</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}