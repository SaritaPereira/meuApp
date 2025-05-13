import React from 'react';
import { getImageUrl } from './utils';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function ProfileWithCard() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ name: 'Masuko Saruhashi', imageId: 'YfeOqp2' }}
      />
    </Card>
  );
}

export default ProfileWithCard;