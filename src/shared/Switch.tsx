import * as React from "react";
import * as ReactDOM from "react-dom";

export function Switch(props) {
  return (
    <>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props?.checked} onChange={() => props?.handleChange(!props?.checked)} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props?.title || ''}</label>
      </div>
    </>
  )
} 