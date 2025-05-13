import React from 'react';

function Cup({ guest }) {
  return <h3>Xícara de chá para o convidado #{guest}</h3>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

export default TeaSet;