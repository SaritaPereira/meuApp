import { Link } from 'react-router-dom';
import './Contador.css';
import HomemIcon from './img/homem.png';
import MulherIcon from './img/mulher.png';

let total = 0;
let homens = 0;
let mulheres = 0;

function Contador() {
  function reset() {
    total = 0;
    homens = 0;
    mulheres = 0;
    atualizarContadores();
  }

  return (
    <div className="total-section">
      <h2>Total <button onClick={reset}>↻</button></h2>
      <p className="valor-total">{total}</p>
    </div>
  );
}

function ContadorGenero({ label }) {
  function incrementar() {
    if (label === 'Homens') {
      homens += 1;
    } else {
      mulheres += 1;
    }
    total += 1;
    atualizarContadores();
  }

  function decrementar() {
    if (label === 'Homens' && homens > 0) {
      homens -= 1;
      total -= 1;
    } else if (label === 'Mulheres' && mulheres > 0) {
      mulheres -= 1;
      total -= 1;
    }
    atualizarContadores();
  }

  return (
    <div className="contador">
      <img src={label === 'Homens' ? HomemIcon : MulherIcon} alt={label} width="150" height="150" />
      <div className="buttons-container">
        <button className="btn-increment" onClick={incrementar}>+</button>
        <button className="btn-decrement" onClick={decrementar}>−</button>
      </div>
      <p>{label}</p>
      <p className="valor">{label === 'Homens' ? homens : mulheres}</p>
    </div>
  );
}

function atualizarContadores() {
  document.querySelector('.valor-total').textContent = total;
  document.querySelectorAll('.valor')[0].textContent = homens;
  document.querySelectorAll('.valor')[1].textContent = mulheres;
}

function Atv02() {
  return (
    <>
      <h1>Atividade 2</h1>
      <br />
      <div className="container">
        <Contador />
        <div className="section">
          <ContadorGenero label="Homens" />
          <ContadorGenero label="Mulheres" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv02;