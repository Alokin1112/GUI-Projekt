import { Aspect } from "../core/constants/SaleQualityData.const";
import StarsDisplay from "./StarsDisplay";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function QualityRating({ aspects }: { aspects: Aspect[] }) {
  const { t } = useTranslation();

  const calculateQualityCategory = (totalRating: number, maxRating: number) => {
    const percentage = (totalRating / maxRating) * 100;
    const scaledRating = (percentage / 20).toFixed(1);

    return parseFloat(scaledRating);
  };

  const CenteredDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const totalRating = aspects.reduce((sum, aspect) => sum + aspect.rating, 0);
  const maxRating = aspects.reduce((sum, aspect) => sum + aspect.maxRating, 0);

  return (
    <CenteredDiv>
      <p style={{ marginRight: "auto", marginLeft: "10px" }}>
        {t("saleQuality.qualityRating")}
        {`${totalRating} / ${maxRating}`}
      </p>
      <p>{t("saleQuality.qualityCategory")}</p>
      <StarsDisplay review={calculateQualityCategory(totalRating, maxRating)} />
    </CenteredDiv>
  );
}

export default QualityRating;
