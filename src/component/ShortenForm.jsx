import React, { useState } from "react";

const ShortenForm = () => {
  const handleCopy = (e) => {
    let curBtn = e.currentTarget;
    const copyBtns = document.querySelectorAll(".copy__btn");
    copyBtns.forEach((btn) => {
      btn.classList.remove("copyied");
      btn.textContent = "Copy";
    });
    curBtn.classList.add("copyied");
    curBtn.textContent = "Copyied!";
    navigator.clipboard.writeText("copyied");
  };
  return (
    <div className="shorten">
      <div className="container">
        <div className="shorten__container">
          <form action="" className="shorten__form">
            <div className="shorten__form__container">
              <div className="input__holder">
                <input
                  type="url"
                  name="url"
                  placeholder="Shorten a link here..."
                  autoComplete="off"
                />
              </div>
              <p className="msg__invalid">Please add a valid link</p>
            </div>
            <button type="submit" className="shorten__btn">
              Shorten It!
            </button>
            <div className="shorten__bg">
              <img
                src="images/bg-shorten-desktop.svg"
                className="shorten__bg--desk"
              />
              <img
                src="images/bg-shorten-mobile.svg"
                className="shorten__bg--mob"
              />
            </div>
          </form>
        </div>
        <div className="shorted__container">
          <ul className="shorted__links">
            <li className="shorted__link">
              <p className="unshort__link">https://google.com</p>
              <hr />
              <div className="short__container">
                <a className="short__link">https://rel.ink/k4lkyk</a>
                <button className="copy__btn" onClick={handleCopy}>
                  Copy
                </button>
              </div>
            </li>
            <li className="shorted__link">
              <p className="unshort__link">https://google.com</p>
              <hr />
              <div className="short__container">
                <a className="short__link">https://rel.ink/k4lkyk</a>
                <button className="copy__btn" onClick={handleCopy}>
                  Copy
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShortenForm;
