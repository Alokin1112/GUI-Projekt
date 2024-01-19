import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import { OrdersWidget } from "../widgets/OrdersWidget";
import { SaleQualityWidget } from "../widgets/SaleQualityWidget";
import { CustomersReviewWidget } from "../widgets/CustomersReviewWidget";
import { OfferRankingWidget } from "../widgets/OfferRankingWidget";
import { SaleChartWidget } from "../widgets/SaleChartWidget";
import { SaleTipsWidget } from "../widgets/SaleTipsWidget";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 16px auto;
  gap: 8px;
  flex-flow:column nowrap;
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(6,1fr) ;
    grid-template-areas:
    'saleTips saleTips orders orders orders orders'
    'saleTips saleTips saleQuality saleQuality saleQuality saleQuality'
    'customerReview customerReview customerReview customerReview customerReview customerReview'
    'offerRanking offerRanking offerRanking offerRanking offerRanking offerRanking'
    'saleChart saleChart saleChart saleChart saleChart saleChart'
  ;
  }
`

export const DashboardPage: FunctionComponent = () => {

  return (
    <DashboardWrapper>
      <OrdersWidget />
      <SaleQualityWidget />
      <SaleTipsWidget />
      <CustomersReviewWidget />
      <OfferRankingWidget />
      <SaleChartWidget />
    </DashboardWrapper>
  )
}
