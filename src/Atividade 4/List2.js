import { useState } from 'react';
import './Atv04.css';

export default function List2() {
  const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' }
  ];
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div className="component-container">
      <h2>List2</h2>
      <h3>Inspiring sculptors:</h3>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button
              onClick={() => {
                setArtists(artists.filter(a => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}