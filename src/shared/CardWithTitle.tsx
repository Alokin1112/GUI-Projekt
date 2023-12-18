import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "./Card";
import { Link } from "react-router-dom";
import './CardWithTitle.css'

function CardWithTitle(props) {
  return (
    <>
      <div style={props?.style}>
        <Link to={props.link} className="card__item__header">
          <div className="card__item__header__left">
            {
              props?.icon && <span className="material-icons">
                {props?.icon}
              </span>
            }

            {props?.title || ''}
          </div>

          {
            props?.link &&
            <span className="material-icons">
              open_in_new
            </span>
          }

        </Link>
        <Card style={props?.cardStyles || {}}>
          <div className="card__item__content">
            {props?.children}
          </div>
        </Card>
      </div>
    </>
  )
}

export default CardWithTitle;