import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

export const OrdersPage: FunctionComponent = () => {
  const { id } = useParams();

  return (
    <>
      OrdersPage {id}
    </>
  )
}