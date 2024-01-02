import React, { FunctionComponent, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { useTranslation } from "react-i18next";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import { ASPECTS, Aspect } from "../core/constants/SaleQualityData.const";
import AspectChart from "../shared/QualityBar";
import QualityRating from "../shared/QualityRating";

export const SaleQualityWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const [worstAspects, setWorstAspects] = useState([]);

  function findWorstAspects(data: Aspect[]): Aspect[] {
    const sorted = [...data].sort((a, b) => a.rating - b.rating);

    return sorted.slice(0, 3);
  }

  useEffect(() => {
    setWorstAspects(findWorstAspects(ASPECTS));
  }, []);

  return (
    <>
      <CardWithTitle
        icon="dataset"
        title={t("saleQuality.title")}
        style={{ gridArea: "saleQuality" }}
        link={"/" + RoutesPath.SALE_QUALITY}
      >
        {t("saleQuality.worstAspects")}
        {worstAspects.length != 0 &&
          worstAspects.map((item) => <AspectChart aspect={item} />)}
        <QualityRating aspects={ASPECTS} />
      </CardWithTitle>
    </>
  );
};
