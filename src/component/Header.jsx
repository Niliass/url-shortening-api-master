import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <div className="container">
        <a href="/">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <button className="header__bar__btn" onClick={() => setActive(!active)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className={active ? "active" : ""}>
          <ul className="header__nav">
            <li className="header__nav__link">
              <a href="#">Features</a>
            </li>
            <li className="header__nav__link">
              <a href="#">Pricing</a>
            </li>
            <li className="header__nav__link">
              <a href="#">Resources</a>
            </li>
          </ul>
          <hr />
          <div className="header__log__grp">
            <a href="#" className="btn__secondary">
              Login
            </a>
            <a href="#" className="btn__primary">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
