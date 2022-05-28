import "./App.css";
import React, { useEffect, useState } from "react";
document.title = "Clock";

function App() {
  const [rotateSec, setRotateSec] = useState();
  const [rotateHr, setRotateHr] = useState();
  const [rotateMin, setRotateMIn] = useState();

  setInterval(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const showHours = 30 * hours + minutes / 2;
    const showMinutes = 6 * minutes;
    const showSeconds = 6 * seconds;
    setRotateHr(showHours);
    setRotateMIn(showMinutes);
    setRotateSec(showSeconds);
  }, 1000);

  console.log(rotateSec);
  return (
    <>
      <div className="container ">
        <div className="clock">
          <div
            className="clock-hand hour"
            style={{ transform: `rotate(${rotateHr}deg)` }}
          ></div>
          <div
            className="clock-hand minute"
            style={{ transform: `rotate(${rotateMin}deg)` }}
          ></div>
          <div
            className="clock-hand second "
            style={{ transform: `rotate(${rotateSec}deg)` }}
          ></div>
          <div className="number number-1 ">1</div>
          <div className="number number-2 ">2</div>
          <div className="number number-3 ">3</div>
          <div className="number number-4 ">4</div>
          <div className="number number-5 ">5</div>
          <div className="number number-6 ">6</div>
          <div className="number number-7 ">7</div>
          <div className="number number-8 ">8</div>
          <div className="number number-9 ">9</div>
          <div className="number number-10 ">10</div>
          <div className="number number-11 ">11</div>
          <div className="number number-12 ">12</div>
        </div>
      </div>
    </>
  );
}

export default App;
