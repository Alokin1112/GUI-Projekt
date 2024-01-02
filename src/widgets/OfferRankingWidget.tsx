import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { useTranslation } from "react-i18next";

export const OfferRankingWidget: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <CardWithTitle
      icon="dataset"
      title={t("offerRanking.title")}
      style={{ gridArea: "offerRanking" }}
    ></CardWithTitle>
  );
};
