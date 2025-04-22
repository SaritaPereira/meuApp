import './Letreiro.css';

export default function Letreiro() {
    function iniciarTexto(){
        const texto="Conheça a Fatec";
        let textoAtual="";
        let indice=0;

        setInterval(() => {
            if(indice >= texto.length){
                indice=0;
                textoAtual="";
            }
            textoAtual= texto.substring(0, indice + 1);
            indice++;
            const elemento= document.querySelector("#texto");
            if(elemento){
                elemento.textContent= textoAtual;
            }            
        }, 200);
    }

    setTimeout(iniciarTexto,0);

  return (
    <div className="letreiro">
      <h1>Letreiro</h1>
      <p id="texto"></p>
    </div>
  );
}
