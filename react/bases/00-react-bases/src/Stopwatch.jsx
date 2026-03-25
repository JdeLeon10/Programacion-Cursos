import "./Stopwatch.css";
import React, { use } from "react";
import { useEffect, useState, useRef } from "react";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {}, [isRunning]);

  const startStopwatch = () => {};

  const stopStopwatch = () => {};

  const resetStopwatch = () => {};

  const formatTimeStopwatch = () => {
    return new Date(elapseTime).toISOString().slice(11, 19);
  };

  return (
    <>
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch">
        <div className="display">{formatTimeStopwatch()}</div>
        <div className="controls">
          <button className="start-button" onClick={startStopwatch}>
            Start
          </button>
          <button className="stop-button" onClick={stopStopwatch}>
            Stop
          </button>
          <button className="reset-button" onClick={resetStopwatch}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
