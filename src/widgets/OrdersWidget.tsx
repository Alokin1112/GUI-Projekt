import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import CardWithTitle from "../shared/CardWithTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export interface OrdersWidgetItem {
  icon: string;
  name: string;
  field: string;
}

const Container = styled.div`
  margin: -8px -12px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  width: calc(100% + 24px);
  align-items: center;
  justify-content: space-between;
`;
const OrderItem = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 24px;
  @media (min-width: 600px) {
    border-bottom: none;
    border-right: 1px solid var(--main-color);
  }
  &:last-child {
    border: none;
  }
`;
const OrderItemLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-self: center;
  font-size: 19px;
  gap: 4px;
  text-decoration: none;
`;
const OrderItemValue = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 31px;
  padding: 35px 0px;
`;

const OrdersWidgetItems: OrdersWidgetItem[] = [
  {
    icon: "money_off",
    name: "orders.unPaid",
    field: "unPaid",
  },
  {
    icon: "cancel_schedule_send",
    name: "orders.notSend",
    field: "notSend",
  },
  {
    icon: "loop",
    name: "orders.returns",
    field: "returns",
  },
];

export const OrdersWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const orders = useSelector(
    (state: any) => state?.user.shops[state?.user?.selectedShop].orders
  );
  if (orders.length == 0) {
    return (
      <>
        <CardWithTitle
          icon="local_shipping"
          title={t("orders.title")}
          style={{ gridArea: "orders", height: "100%" }}
          link={"/" + RoutesPath.ORDERS_PAGE}
        >
          <h2
            style={{
              width: "100%",
              height: "60px",
              textAlign: "center",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {t("orders.noData")}
          </h2>
        </CardWithTitle>
      </>
    );
  }
  return (
    <>
      <CardWithTitle
        icon="local_shipping"
        title={t("orders.title")}
        style={{ gridArea: "orders", height: "100%" }}
      >
        <Container>
          {OrdersWidgetItems.map((item, index) => (
            <OrderItem key={index}>
              <OrderItemLink to={"/" + RoutesPath.ORDERS_PAGE + "/" + item?.field}>
                <span className="material-icons">{item.icon}</span>
                <span style={{ textDecoration: "underline" }}>
                  {t(item.name)}
                </span>
              </OrderItemLink>

              <OrderItemValue>{orders[item.field]}</OrderItemValue>
            </OrderItem>
          ))}
        </Container>
      </CardWithTitle>
    </>
  );
};
