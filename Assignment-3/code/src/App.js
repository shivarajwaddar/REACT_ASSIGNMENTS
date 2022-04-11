import React from 'react';
import './App.css';
import './index.js';
import Employee from './employee';


function App({ employee }) {
  return (
    <div className="App">
      <Employee employee={employee} />

    </div>
  );
}

export default App;
