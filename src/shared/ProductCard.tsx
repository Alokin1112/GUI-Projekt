import { Product } from "../core/constants/Products.const";
import img from "../../public/img1.png";
import { useTranslation } from "react-i18next";

interface MyProps {
  product: Product;
  sort: string;
}

function ProductCard({ product, sort }: MyProps) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        border: "1px solid var(--main-color)",
        padding: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minWidth: "232px",
      }}
    >
      <h2 style={{ color: "var(--main-color)", fontSize: "19px" }}>
        {product.name}
      </h2>
      <img
        src={img}
        alt={`Product: ${product.name}`}
        height={100}
        width={100}
      />

      {sort === "best" && (
        <>
          <p>
            {t("offerRanking.amountSold")} {product.amountSold}
          </p>
          <p>
            {t("offerRanking.turnover")}
            {product.turnover ?? t("offerRanking.noData")} zł
          </p>
        </>
      )}

      {sort === "worst" && (
        <>
          <p>
            {t("offerRanking.amountSold")} {product.amountSold}
          </p>
          <p>
            {t("offerRanking.views")}
            {product.views ?? t("offerRanking.noData")}
          </p>
        </>
      )}
    </div>
  );
}

export default ProductCard;
