/* eslint-disable react-hooks/exhaustive-deps */

// useEffect(function, [dependencies])

// 1. useEffect(() => {})             ||Runs after every re-render
// 2. useEffect(() => {}, [])         ||Runs only on mount
// 2. useEffect(() => {}, [value])    ||Runs on mount + when value changes

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    document.title = `count: ${count} ${color}`;
  }, [count, color]);

  function handleAddCount() {
    setCount((c) => c + 1);
  }

  function handleSubtractCount() {
    setCount((c) => c - 1);
  }

  function handleChangeColor() {
    setColor((c) => (c === 'green' ? 'blue' : 'green'));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleSubtractCount}>Subtract</button> <br />
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default App;
