import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart.svg";
import search from "../assets/img/search.svg";
import menu from "../assets/img/icon-menu.png";
import close from "../assets/img/icon-close.png";

import { useState } from "react";

import "../assets/sass/Header.scss";
import React from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header__container">
      <header className="header">
        <div className="header__child">
          <img src={logo} className="header__logo" alt="logo" />

          <ul
            className={`header__menu ${openMenu ? `header__menu--active` : ""}`}
          >
            <li className="header__menu--item">
              <a className="header__menu--link" href="#products">
                Nossas soluções
              </a>
            </li>

            <li className="header__menu--item">
              <a className="header__menu--link" href="#about">
                Conheça a Jüssi
              </a>
            </li>
          </ul>

          <a
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className="header__menu--mobile"
          >
            <img src={openMenu ? close : menu} alt="menu" />
          </a>
        </div>

        <div className="header__child">
          <div className="search">
            <input className="search__input" placeholder="Buscar"></input>
            <button className="search__btn">
              <img src={search} alt="cart" />
            </button>
          </div>

          <ul className="header__actions">
            <li className="header__actions--item">
              <a className="header__actions--link" href="#">
                Login
              </a>
            </li>

            <li className="header__actions--item">
              <a className="header__actions--link" href="#">
                <img src={cart} alt="cart" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
