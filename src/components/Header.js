import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart.svg";
import search from "../assets/img/search.svg";
import menu from "../assets/img/icon-menu.png";
import close from "../assets/img/icon-close.png";

import { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getList } from "../assets/utils/list";

import "../assets/sass/Header.scss";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getList().then(
      (items) => {
        if (load) {
          setList(items.results);
        }
      },
      (error) => {
        return console.log(error);
      }
    );
    return setLoad(false);
  }, []);

  const handleOnSearch = (string, results) => {
    setAlert(false);

    if (results.length === 0) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  };

  const handleOnSelect = (item) => {
    setAlert(false);
  };

  const handleOnFocus = () => {
    setAlert(false);
  };

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
            <ReactSearchAutocomplete
              showIcon={false}
              placeholder="Buscar"
              items={list}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            />

            {alert && (
              <div className="search__alert">
                Sinto muito, não encontramos nada. :/
              </div>
            )}

            <img className="search__btn" src={search} alt="cart" />
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
