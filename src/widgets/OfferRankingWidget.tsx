import React, { FunctionComponent, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { useTranslation } from "react-i18next";
import Toggle, { ToggleItem } from "../shared/Toggle";
import styled from "styled-components";
import { PRODUCTS, Product } from "../core/constants/Products.const";
import ProductCard from "../shared/ProductCard";
import { useSelector } from "react-redux";

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  width: 100%;
  overflow-x: auto;
  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const OfferRankingWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState("best");
  const products = useSelector(
    (state: any) => state?.user.shops[state?.user?.selectedShop].products
  );
  const [currentProducts, setCurrentProduct] = useState(filterAndSortProducts(products, sort));

  const handleToggleChange = (val) => {
    setSort(val);
    setCurrentProduct(filterAndSortProducts(PRODUCTS, val));
  };

  const type: ToggleItem[] = [
    { id: "best", title: t("offerRanking.best") },
    { id: "worst", title: t("offerRanking.worst") },
  ];

  useEffect(() => {
    setCurrentProduct(filterAndSortProducts(products, sort));
  }, [products]);

  if (currentProducts.length == 0) {
    return (
      <CardWithTitle
        icon="analytics"
        title={t("offerRanking.title")}
        style={{ gridArea: "offerRanking" }}
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
          {t("offerRanking.noOffers")}
        </h2>
      </CardWithTitle>
    );
  } else {
    return (
      <>
        <CardWithTitle
          icon="analytics"
          title={t("offerRanking.title")}
          style={{ gridArea: "offerRanking" }}
        >
          <ToggleWrapper>
            <Toggle
              title={t("offerRanking.toggle")}
              items={type}
              handleChange={handleToggleChange}
              checked={sort}
            />
            <ProductContainer>
              {currentProducts.map((product, index) => (
                <ProductCard product={product} sort={sort} key={index} />
              ))}
            </ProductContainer>
          </ToggleWrapper>
        </CardWithTitle>
      </>
    );
  }
};


const filterAndSortProducts = (products: Product[], sort: string): Product[] => {
  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    if (sort === "best") {
      return a.amountSold - b.amountSold;
    } else {
      return b.amountSold - a.amountSold;
    }
  });

  return sortedProducts.slice(0, 5);
};