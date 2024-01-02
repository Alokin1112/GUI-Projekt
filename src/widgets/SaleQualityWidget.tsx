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

  if (worstAspects.length === 0) {
    return (
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
        {t("saleQuality.noData")}
      </h2>
    );
  }

  return (
    <>
      <CardWithTitle
        icon="query_stats"
        title={t("saleQuality.title")}
        style={{ gridArea: "saleQuality" }}
        link={"/" + RoutesPath.SALE_QUALITY}
      >
        {t("saleQuality.worstAspects")}
        {worstAspects.length != 0 &&
          worstAspects.map((item, index) => (
            <div key={index}>
              <AspectChart aspect={item} />
            </div>
          ))}
        <QualityRating aspects={ASPECTS} />
      </CardWithTitle>
    </>
  );
};
