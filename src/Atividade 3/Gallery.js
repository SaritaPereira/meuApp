import React from 'react';

function Profile() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  );
}

function Gallery() {
  return (
    <section>
      <h2>Cientistas Incríveis</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );

}

export default Gallery;