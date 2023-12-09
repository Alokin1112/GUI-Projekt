import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import plFlag from '../assets/images/flag-poland.png'
import ukFlag from '../assets/images/flag-united-kingdom.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage, changeTheme } from '../core/store/globalSettingsSlice'


const Layout: FunctionComponent<{ children: any }> = ({ children }) => {
  const { language, theme } = useSelector((state: any) => ({ language: state?.globalSettings?.language, theme: state?.globalSettings?.theme }))
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex ">
            <a className="navbar-brand title">Dashboard</a>
          </div>
          <div className="d-flex gap-4">
            <div
              className="btn-group"
              role="group"
            >
              <input
                type="radio"
                className="btn-check"
                name="light"
                id="light"
                autoComplete="off"
                checked={theme === 'light'}
                onChange={() => dispatch(changeTheme('light'))}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="light"
              >
                🌞
              </label>

              <input
                type="radio"
                className="btn-check"
                name="dark"
                id="dark"
                autoComplete="off"
                checked={theme === 'dark'}
                onChange={() => dispatch(changeTheme('dark'))}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="dark"
              >
                🌑
              </label>

            </div>
            <div
              className="btn-group"
              role="group"
            >
              <input
                type="radio"
                className="btn-check"
                name="en"
                id="en"
                autoComplete="off"
                checked={language === 'en'}
                onChange={() => dispatch(changeLanguage('en'))}

              />
              <label
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                htmlFor="en"
              >
                <img
                  className="country__flag__image"
                  src={ukFlag}
                />
              </label>

              <input
                type="radio"
                className="btn-check"
                name="pl"
                id="pl"
                autoComplete="off"
                checked={language === 'pl'}
                onChange={() => dispatch(changeLanguage('pl'))}
              />
              <label
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                htmlFor="pl"
              >
                <img
                  className="country__flag__image"
                  src={plFlag}
                />
              </label >

            </div >
            <button
              className="btn btn-outline-secondary gap-2 d-flex"
            >
              <span className="material-icons">
                logout
              </span>
              Logout
            </button >
          </div >
        </div >
      </nav >


      <div className="layout__wrapper">
        {children}
      </div>
    </>
  )

}

export default Layout