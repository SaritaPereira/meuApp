import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import Form from './Form';
import MovingDot from './MovingDot';
import Form2 from './Form2';
import Form3 from './Form3';
import List from './List';
import List2 from './List2';
import ShapeEditor from './ShapeEditor';
import CounterList from './CounterList';
import List3 from './List3';
import List4 from './List4';
import BucketList from './BucketList';
import './Atv04.css';

export default function Atv04() {
  return (
    <>
      <h1>Atividade 4</h1>
      <div className="component-container">
        <Toolbar />
      </div>
      <hr />
      <div className="component-container">
        <Gallery />
      </div>
      <hr />
      <div className="component-container">
        <Counter />
      </div>
      <hr />
      <div className="component-container">
        <Form />
      </div>
      <hr />
      <div className="component-container">
        <MovingDot />
      </div>
      <hr />
      <div className="component-container">
        <Form2 />
      </div>
      <hr />
      <div className="component-container">
        <Form3 />
      </div>
      <hr />
      <div className="component-container">
        <List />
      </div>
      <hr />
      <div className="component-container">
        <List2 />
      </div>
      <hr />
      <div className="component-container">
        <ShapeEditor />
      </div>
      <hr />
      <div className="component-container">
        <CounterList />
      </div>
      <hr />
      <div className="component-container">
        <List3 />
      </div>
      <hr />
      <div className="component-container">
        <List4 />
      </div>
      <hr />
      <div className="component-container">
        <BucketList />
      </div>
      <br />
      <Link to="/">Voltar</Link>
    </>
  );
}