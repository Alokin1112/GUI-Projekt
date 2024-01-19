import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import plFlag from "../assets/images/flag-poland.png";
import ukFlag from "../assets/images/flag-united-kingdom.png";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, changeTheme } from "../core/store/globalSettingsSlice";
import { useTranslation } from "react-i18next";
import { setUser, setSelected } from "../core/store/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout: FunctionComponent<{ children: any }> = ({ children }) => {
  const { language, theme } = useSelector((state: any) => ({
    language: state?.globalSettings?.language,
    theme: state?.globalSettings?.theme,
  }));
  const dispatch = useDispatch();
  const currentShop = useSelector(
    (state: any) => state?.user.shops[state?.user?.selectedShop].name
  );
  const selectedShop = useSelector((state: any) => state?.user?.selectedShop);
  let shopList = useSelector((state: any) => state?.user.shops);
  console.log(selectedShop);
  console.log(useSelector((state: any) => state?.user.shops));

  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setUser(""));
    navigate("/login");
  };

  const addShop = (event) => {
    event.preventDefault();
    navigate("/add-shop");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex ">
            <Link className="navbar-brand title" to="/">
              {t("title")}
            </Link>
          </div>
          <div className="d-flex gap-4">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                {currentShop}
              </button>
              <ul className="dropdown-menu">
                {shopList.length !== 0 &&
                  shopList.map((shop, index) => (
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          console.log(selectedShop);
                          dispatch(setSelected(index));
                          console.log(selectedShop);
                        }}
                      >
                        {shop.name}
                      </button>
                    </li>
                  ))}
                {shopList.length === 0 && (
                  <li>
                    <span className="dropdown-item">No more shops</span>
                  </li>
                )}
              </ul>
              <button type="button" className="btn btn-light" onClick={addShop}>
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="btn-group" role="group">
              <input
                type="radio"
                className="btn-check"
                name="light"
                id="light"
                autoComplete="off"
                checked={theme === "light"}
                onChange={() => dispatch(changeTheme("light"))}
              />
              <label className="btn btn-outline-primary" htmlFor="light">
                🌞
              </label>

              <input
                type="radio"
                className="btn-check"
                name="dark"
                id="dark"
                autoComplete="off"
                checked={theme === "dark"}
                onChange={() => dispatch(changeTheme("dark"))}
              />
              <label className="btn btn-outline-primary" htmlFor="dark">
                🌑
              </label>
            </div>
            <div className="btn-group" role="group">
              <input
                type="radio"
                className="btn-check"
                name="en"
                id="en"
                autoComplete="off"
                checked={language === "en"}
                onChange={() => dispatch(changeLanguage("en"))}
              />
              <label
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                htmlFor="en"
              >
                <img className="country__flag__image" src={ukFlag} />
              </label>

              <input
                type="radio"
                className="btn-check"
                name="pl"
                id="pl"
                autoComplete="off"
                checked={language === "pl"}
                onChange={() => dispatch(changeLanguage("pl"))}
              />
              <label
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                htmlFor="pl"
              >
                <img className="country__flag__image" src={plFlag} />
              </label>
            </div>
            <button
              className="btn btn-outline-secondary gap-2 d-flex"
              onClick={logout}
            >
              <span className="material-icons">logout</span>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="layout__wrapper">{children}</div>
    </>
  );
};

export default Layout;
