import './Relogio.css';

export default function Relogio() {
    const atualizaHora= ()=>{
        const elementoHora= document.getElementById('hora');
        if (elementoHora){
            elementoHora.textContent= new Date().toLocaleTimeString();
        }
    };

    setInterval(atualizaHora, 1000);

  return (
    <div>
      <h1>Relogio</h1>
      <p id="hora">{new Date().toLocaleTimeString()}</p>
    </div>
  );
}
