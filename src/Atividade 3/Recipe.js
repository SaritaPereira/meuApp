import React from 'react';

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Ferva {drinkers} xícaras de água.</li>
      <li>Adicione {drinkers} colheres de chá e {0.5 * drinkers} colheres de especiarias.</li>
      <li>Adicione {0.5 * drinkers} xícaras de leite para ferver e açúcar a gosto.</li>
    </ol>
  );
}

export default Recipe;