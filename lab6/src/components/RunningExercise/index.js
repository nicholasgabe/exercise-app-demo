import React, { useState } from "react";

const RunningExercise = () => {
  const [lapTimes, setLapTimes] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLapTimes((prevLapTimes) => [...prevLapTimes, currentTime]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
      <h2>Running Exercise</h2>
      <button onClick={recordLap}>Record Lap</button>
      <div>
        {lapTimes.length > 0 && (
          <div>
            <h3>Laps:</h3>
            <ul>
              {lapTimes.map((lapTime, index) => (
                <li key={index}>{lapTime}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RunningExercise;
