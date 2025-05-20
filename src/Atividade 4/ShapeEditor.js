import { useState } from 'react';
import './Atv04.css';

export default function ShapeEditor() {
  const initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 }
  ];
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div className="component-container">
      <h2>ShapeEditor</h2>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          className={`shape-editor-shape ${shape.type}`}
          style={{
            left: shape.x,
            top: shape.y
          }}
        />
      ))}
    </div>
  );
}