import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const CardItem = styled.div`
  border: 2px;
  border: 1px solid var(--main-color);
`

function Card(props) {
  return (
    <CardItem style={props?.style}>
      {props?.children}
    </CardItem >
  )
}

export default Card;