import React from "react";

const Boost = () => {
  return (
    <div className="boost">
      <div className="container">
        <h2 className="boost__title">Boost your links today</h2>
        <button className="boost__btn">Get Started</button>
      </div>
      <div className="boost__bg">
        <img src="images/bg-boost-desktop.svg" className="boost__bg--desk" />
        <img src="images/bg-boost-mobile.svg" className="boost__bg--mob" />
      </div>
    </div>
  );
};

export default Boost;
