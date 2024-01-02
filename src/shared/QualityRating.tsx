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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    max-width: 400px;
    padding: 20px;
  `;

  const totalRating = aspects.reduce((sum, aspect) => sum + aspect.rating, 0);
  const maxRating = aspects.reduce((sum, aspect) => sum + aspect.maxRating, 0);

  return (
    <CenteredDiv>
      <p>
        {t("saleQuality.qualityRating")}
        {`${totalRating} / ${maxRating}`}
      </p>
      <p>{t("saleQuality.qualityCategory")}</p>
      <StarsDisplay review={calculateQualityCategory(totalRating, maxRating)} />
    </CenteredDiv>
  );
}

export default QualityRating;
