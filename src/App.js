// src/App.js
import React from 'react';
import ShepherdTour from './ShepherdTour';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcome-title">Welcome to Shepherd Tour App</h1>
        <button id="start-tour">Start Tour</button>
        <div id="feature-element" style={{ marginTop: '20px' }}>Feature Element</div>
        <div id="conclusion-element" style={{ marginTop: '20px' }}>Conclusion Element</div>
      </header>
      <ShepherdTour />
    </div>
  );
}

export default App;
