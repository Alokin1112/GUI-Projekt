import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";

const Layout: FunctionComponent<{ children: any }> = ({ children }) => {

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="layout__wrapper">
        {children}
      </div>
    </>
  )

}

export default Layout