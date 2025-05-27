import { Link } from 'react-router-dom';
import FormQuiz from './FormQuiz'
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import Messenger from './App';

export default function Atv05() {
  return (
    <>
      <h1>Atividade 5</h1>
          
      <h3>1. FormQuiz - City Quiz</h3>
      <FormQuiz />
      <hr />

      <h3>2. FormTicket - Check-in Form</h3>
      <FormTicket />
      <hr />

      <h3>3. Accordion </h3>
      <Accordion />
      <hr />

      <h3>4. Messenger - Chat App</h3>
      <Messenger />
      <hr />

      <Link to="/">Voltar</Link>
      <br/>
      <br/>
    </>
  );
}