import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import './DashboardPage.css'
import { OrdersWidget } from "../widgets/OrdersWidget";
import { SaleQualityWidget } from "../widgets/SaleQualityWidget";
import { CustomersReviewWidget } from "../widgets/CustomersReviewWidget";
import { OfferRankingWidget } from "../widgets/OfferRankingWidget";
import { SaleChartWidget } from "../widgets/SaleChartWidget";
import { SaleTipsWidget } from "../widgets/SaleTipsWidget";



export const DashboardPage: FunctionComponent = () => {

  return (
    <div className="dashboard__grid">
      <OrdersWidget />
      <SaleQualityWidget />
      <SaleTipsWidget />
      <CustomersReviewWidget />
      <SaleChartWidget />
      <OfferRankingWidget />
    </div>
  )
}
