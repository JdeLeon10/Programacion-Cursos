import "./DigitalClockApp.css";
import { useState, useEffect } from "react";

export const DigitalClockApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Cada segundo se actualiza la hora

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []); // El efecto se ejecutará solo una vez después del primer renderizado

  return (
    <>
      <h1 className="clock-title">Digital Clock App</h1>
      <div className="clock">
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </>
  );
};
