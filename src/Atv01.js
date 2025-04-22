import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from 'react-router-dom';

function Atv01() {
  return (
    <>
    <h1> Atividade 1</h1>
    <br/>
    <br/>
    <Relogio />
    <Letreiro />
    <br/>
    <br/>
    <h1><Link to="/"> Voltar</Link></h1>
    </>
  );
}

export default Atv01;
