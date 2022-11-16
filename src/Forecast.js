import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p className="day"> Thu </p>
            <p className="temperature">
              8°/<span className="afternoon">17°</span>C
            </p>
            <p className="emojiDay">☁️</p>
          </div>
          <div className="col">
            <p className="day">Fri</p>
            <p className="temperature">
              7°/<span className="afternoon">15°</span>C
            </p>
            <p className="emojiDay">☀️</p>
          </div>
          <div className="col">
            <p className="day">Sat</p>
            <p className="temperature">
              {" "}
              8°/<span className="afternoon">16°</span> C
            </p>
            <p className="emojiDay">☁️</p>
          </div>
          <div className="col">
            <p className="day">Sun</p>
            <p className="temperature">
              {" "}
              9°/<span className="afternoon">17°</span> C{" "}
            </p>
            <p className="emojiDay">⛅</p>
          </div>
          <div className="col">
            <p className="day">Mon</p>
            <p className="temperature">
              {" "}
              10°/<span className="afternoon">17°</span> C
            </p>
            <p className="emojiDay">⛅</p>
          </div>
        </div>
      </div>
    </div>
  );
}

