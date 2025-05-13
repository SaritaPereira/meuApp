import React from 'react';
import { people } from './data';
import { getImageUrl } from './utils';

function List() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const listItems = chemists.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b> {person.profession === 'chemist' ? 'Químico' : person.profession} conhecido por {person.accomplishment === 'discovery of Arctic ozone hole' ? 'descoberta do buraco de ozônio no Ártico' : person.accomplishment === 'pioneering cortisone drugs, steroids' ? 'pioneirismo em medicamentos de cortisona e esteroides' : person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;