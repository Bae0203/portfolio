import React, { useState } from "react";
import * as S from "../../../styles/ChartBox.Style";
import { Highthon, Kosamidas, PlusBtn } from "./useChartBox";
import ChartContent from "./chartContent/ChartContent";

const ChartBox = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <S.MainContainer
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.ContentsBox>
        <S.Title>title</S.Title>
        {isHover ? (
          <>
            <ChartContent />
          </>
        ) : (
          <S.PlusBtn image={PlusBtn} />
        )}
      </S.ContentsBox>
      <S.BackgroundImageBox image={Kosamidas} isHover={isHover} />
    </S.MainContainer>
  );
};

export default ChartBox;
