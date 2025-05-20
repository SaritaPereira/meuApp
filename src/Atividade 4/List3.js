import { useState } from 'react';
import './Atv04.css';

export default function List3() {
  const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' }
  ];
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);
  let nextId = 3;

  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div className="component-container">
      <h2>List3</h2>
      <h3>Inspiring sculptors:</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}