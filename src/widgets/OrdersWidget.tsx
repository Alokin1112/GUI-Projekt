import { t } from "i18next";
import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import CardWithTitle from "../shared/CardWithTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './OrdersWidget.css'


export interface OrdersWidgetItem {
  icon: string,
  name: string,
  field: string,
}

const OrdersWidgetItems: OrdersWidgetItem[] = [
  {
    icon: 'money_off',
    name: 'orders.unPaid',
    field: 'unPaid',
  },
  {
    icon: 'cancel_schedule_send',
    name: 'orders.notSend',
    field: 'notSend',
  },
  {
    icon: 'loop',
    name: 'orders.returns',
    field: 'returns',
  }
]

export const OrdersWidget: FunctionComponent = () => {
  const orders = useSelector((state: any) => state?.user.shops[state?.user?.selectedShop].orders);
  return (
    <>
      <CardWithTitle icon="local_shipping" title={t('orders.title')} style={{ gridArea: 'orders' }} link={'/' + RoutesPath.ORDERS_PAGE}>
        <div className="orders__container">
          {OrdersWidgetItems.map((item, index) => (
            <div className="orders__container__item" key={index}>
              <Link to={'/'} className="orders__container__item__link">
                <span className="material-icons">
                  {item.icon}
                </span>
                <span style={{ textDecoration: 'underline' }}>
                  {t(item.name)}
                </span>
              </Link>

              <span className="orders__container__item__value">
                {orders[item.field]}
              </span>
            </div>
          ))}
        </div>

      </CardWithTitle>
    </>
  )
}

