import React from 'react';

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✓'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h2>Lista de Embalagem da Sally Ride</h2>
      <ul>
        <Item isPacked={true} name="Terno espacial" />
        <Item isPacked={true} name="Capacete com folha dourada" />
        <Item isPacked={false} name="Foto do Tam" />
      </ul>
    </section>
  );
}

export default PackingList;