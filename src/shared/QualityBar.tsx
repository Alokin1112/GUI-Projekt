import { Aspect } from "../core/constants/SaleQualityData.const";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function AspectChart({ aspect }: { aspect: Aspect }) {
  const { t } = useTranslation();

  const data = [
    { name: "Rating", value: aspect.rating },
    { name: "Remaining", value: aspect.maxRating - aspect.rating },
  ];

  const COLORS = ["#14A44D", "#EFEFEF"];

  const Wrapper = styled.div`
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Heading = styled.h2`
    color: var(--main-color);
  `;

  return (
    <Wrapper>
      <Heading>{t(aspect.name)}</Heading>
      <PieChart width={200} height={120}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={75}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p>
        {t("saleQuality.rating")}
        <b>{`${aspect.rating}/${aspect.maxRating}`}
        </b>
      </p>
    </Wrapper>
  );
}

export default AspectChart;
