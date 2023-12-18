import * as React from "react";
import * as ReactDOM from "react-dom";
import './Card.css'

function Card(props) {
  return (
    <div className="card__item" style={props?.style}>
      {props?.children}
    </div >
  )
}

export default Card;