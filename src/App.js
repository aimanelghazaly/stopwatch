import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  const startStop = () => {
    setRunning(prevRunning => !prevRunning);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">01-stopwatch</h1>
      <div className="mb-4">
        <span className="display-4">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :
        </span>
        <span className="display-4">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :
        </span>
        <span className="display-4">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div>
        {running ? (
          <button className="btn btn-danger me-2" onClick={startStop}>
            Stop
          </button>
        ) : (
          <button className="btn btn-success me-2" onClick={startStop}>
            Start
          </button>
        )}
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
