import { Link } from 'react-router-dom';
import './Atv03.css'; 
import Gallery from './Gallery';
import ProfileWithCard from './ProfileWithCard';
import PackingList from './PackingList';
import List from './List';
import Recipe from './Recipe';
import TeaSet from './TeaSet';
import TeaGathering from './TeaGathering';

function Atv03() {
  return (
    <>
      <h1>Atividade 3</h1>

      <h2>Galeria e Perfil</h2>
      <Gallery />

      <h2>Cards e Avatar</h2>
      <ProfileWithCard />

      <h2>Lista Renderização Condicional</h2>
      <PackingList />

      <h2>Lista com Filtro (Químicos)</h2>
      <List />

      <h2>Recipe</h2>
      <section>
        <h3>Chai Recipe</h3>
        <h4>Two</h4>
        <Recipe drinkers={2} />
        <h4>Gathering</h4>
        <Recipe drinkers={4} />
      </section>

      <h2>TeaSet</h2>
      <TeaSet />

      <h2>TeaGathering</h2>
      <TeaGathering />

      <br />
      <Link to="/"> Voltar</Link>
    </>
  );
}

export default Atv03;