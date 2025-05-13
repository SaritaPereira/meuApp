import React from 'react';

function Cup({ guest }) {
  return <h3>Xícara de chá para o convidado #{guest}</h3>;
}

function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 5; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

export default TeaGathering;