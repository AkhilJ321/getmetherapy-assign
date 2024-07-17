/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";

/**
 *
 * Clock UI:
 * - Clock
 * - Faces/Marks => 60 -> 12 for hours and 48 for minutes
 * - Hands (hour,minutes and seconds)
 * Functionality
 */

const Mark = ({ angle, type }: any) => {
  return (
    <div
      className={`clock__face-mark clock__face-mark--${type}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        style={{
          width: "5px",
          height: type === "hour" ? "30px" : "10px",
          backgroundColor: type === "hour" ? "orange" : "grey",
        }}
      />
    </div>
  );
};

const Hand = ({ type, angle }: any) => {
  return (
    <div className="clock__hand" style={{ transform: `rotate(${angle}deg)` }}>
      <div className={`clock__hand-body clock__hand-body--${type}`} />
    </div>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Clock = () => {
  const query = useQuery();
  const initialTime = parseInt(query.get("time") ?? "", 10) || Date.now();
  const initialSpeed = query.get("speed") ? parseFloat(query.get("speed")!) : 1;

  const [currentTime, setCurrentTime] = useState(new Date(initialTime));
  const [speed] = useState(initialSpeed);
  const [endTime] = useState(new Date(initialTime - 120 * 60 * 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);
    if (currentTime <= endTime) {
      clearInterval(interval); // Stop the clock
    }
    return () => clearInterval(interval);
  }, [speed, currentTime, endTime]);

  const renderFaceMarks = () => {
    const marks = [];
    for (let i = 1; i <= 60; i++) {
      marks.push(
        <Mark key={i} angle={i * 6} type={i % 5 === 0 ? "hour" : "minute"} />
      );
    }
    return marks;
  };

  return (
    <div className="container">
      <div className="clock">
        <div className="clock__face">{renderFaceMarks()}</div>
        <Hand
          type="hour"
          angle={
            30 * ((currentTime.getHours() % 12) + currentTime.getMinutes() / 60)
          }
        />
        <Hand type="minutes" angle={6 * currentTime.getMinutes()} />
        <Hand type="seconds" angle={6 * currentTime.getSeconds()} />
      </div>
    </div>
  );
};

export default Clock;
