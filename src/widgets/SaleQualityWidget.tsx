import React, { FunctionComponent, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { useTranslation } from "react-i18next";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import { ASPECTS, Aspect } from "../core/constants/SaleQualityData.const";
import AspectChart from "../shared/QualityBar";
import QualityRating from "../shared/QualityRating";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const SaleQualityWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const [worstAspects, setWorstAspects] = useState([]);
  const aspects = useSelector(
    (state: any) => state?.user.shops[state?.user?.selectedShop].aspects
  );

  function findWorstAspects(data: Aspect[]): Aspect[] {
    const sorted = [...data].sort((a, b) => a.rating - b.rating);

    return sorted.slice(0, 3);
  }

  const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: center;
  `;

  useEffect(() => {
    setWorstAspects(findWorstAspects(aspects));
  }, [aspects]);

  if (worstAspects.length == 0) {
    return (
      <CardWithTitle
        icon="query_stats"
        title={t("saleQuality.title")}
        style={{ gridArea: "saleQuality" }}
        link={"/" + RoutesPath.SALE_QUALITY}
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
          {t("saleQuality.noData")}
        </h2>
      </CardWithTitle>
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
        <h4 style={{ textAlign: "center" }}>{t("saleQuality.worstAspects")}</h4>
        <Container>
          {worstAspects.length != 0 &&
            worstAspects.map((item, index) => (
              <div key={index} style={{ margin: "10px" }}>
                <AspectChart aspect={item} />
              </div>
            ))}
        </Container>
        <QualityRating aspects={ASPECTS} />
      </CardWithTitle>
    </>
  );
};
