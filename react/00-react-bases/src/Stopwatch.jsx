import "./Stopwatch.css";
import { useEffect, useState, useRef } from "react";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si el cronómetro está en marcha o detenido
  const [elapseTime, setElapseTime] = useState(0); // Estado que guarda el tiempo transcurrido desde que inicio el cronometro
  const intervalIdRef = useRef(null); // Referencia para almacenar el ID del intervalo, lo que permite limpiar el intervalo cuando sea necesario
  const startTimeRef = useRef(0); // Referencia para almacenar el tiempo de inicio del cronómetro, lo que permite calcular el tiempo transcurrido correctamente incluso después de detener y reiniciar el cronómetro

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapseTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setElapseTime(0);
    setIsRunning(false);
  };

  const formatTimeStopwatch = () => {
    return new Date(elapseTime).toISOString().slice(11, 23);
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
