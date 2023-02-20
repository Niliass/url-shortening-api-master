import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__img">
          <img src="images/illustration-working.svg" alt="working images" />
        </div>
        <div className="intro__content">
          <h1 className="intro__title">More than just shorter links</h1>
          <p className="intro__desc">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="intro__btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
