import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const CardItemHeader = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--main-color);
  color: white;
  padding: 8px 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  &:hover {
  color: var(--active-link-color);
}
`
const CardItemHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: row;
`
const CardItemContent = styled.div`
  padding: 8px 12px;
`

function CardWithTitle(props) {
  return (
    <>
      <CardWrapper style={props?.style}>
        <CardItemHeader to={props.link}>
          <CardItemHeaderLeft>
            {
              props?.icon && <span className="material-icons">
                {props?.icon}
              </span>
            }

            {props?.title || ''}
          </CardItemHeaderLeft>

          {
            props?.link &&
            <span className="material-icons">
              open_in_new
            </span>
          }

        </CardItemHeader>
        <Card style={{ height: '100%', ...(props?.cardStyles || {}) }}>
          <CardItemContent>
            {props?.children}
          </CardItemContent>
        </Card>
      </CardWrapper>
    </>
  )
}

export default CardWithTitle;