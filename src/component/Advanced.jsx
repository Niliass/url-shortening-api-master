import React from "react";

const Advanced = () => {
  return (
    <div className="advanced">
      <div className="container">
        <div className="advanced__intro">
          <h2 className="advanced__title">Advanced Statistics</h2>
          <p className="advanced__desc">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="advanced__content">
          <div className="box">
            <div className="box__img">
              <img src="images/icon-brand-recognition.svg" />
            </div>
            <h3 className="box__title">Brand Recognition</h3>
            <p className="box__desc">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="box">
            <div className="box__img">
              <img src="images/icon-detailed-records.svg" />
            </div>
            <h3 className="box__title">Detailed Records</h3>
            <p className="box__desc">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="box">
            <div className="box__img">
              <img src="images/icon-fully-customizable.svg" />
            </div>
            <h3 className="box__title">Fully Customizable</h3>
            <p className="box__desc">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
