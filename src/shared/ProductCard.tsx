import { styled } from "styled-components";
import { Product } from "../core/constants/Products.const";
import { useTranslation } from "react-i18next";

interface MyProps {
  product: Product;
  sort: string;
}

const Wrapper = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  min-width: 232px;
`;

function ProductCard({ product, sort }: MyProps) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h2 style={{ color: "var(--main-color)", fontSize: "19px" }}>
        {product.name}
      </h2>
      <img
        src={`/public${product.img}`}
        alt={`Product: ${product.name}`}
        height={100}
        width={100}
      />

      {sort === "best" && (
        <>
          <div>
            {t("offerRanking.amountSold")} <b>{product.amountSold}</b>
          </div>
          <div>
            {t("offerRanking.turnover")}
            <b>{product.turnover ?? t("offerRanking.noData")} zł</b>
          </div>
        </>
      )}

      {sort === "worst" && (
        <>
          <div>
            {t("offerRanking.amountSold")} <b>{product.amountSold}</b>
          </div>
          <div>
            {t("offerRanking.views")}
            <b>{product.views ?? t("offerRanking.noData")}</b>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default ProductCard;
