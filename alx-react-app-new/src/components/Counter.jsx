// src/components/Counter.jsx

import React, { useState } from 'react';

function Counter() {
  // 1. Implement State Using useState
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid black', margin: '20px', textAlign: 'center' }}>
      <h2>Simple Counter</h2>
      {/* 2. Display the Current Count */}
      <p>Current Count: {count}</p>

      {/* 3. Create Buttons for Counter Actions */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'green', color: 'white', border: 'none' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'red', color: 'white', border: 'none' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'gray', color: 'white', border: 'none' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;