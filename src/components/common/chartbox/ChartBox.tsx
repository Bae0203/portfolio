import React, { useState } from "react";
import * as S from "../../../styles/ChartBox.Style";
import { PlusBtn } from "./useChartBox";
import { SvgUrl } from "./useChartBackgroundSvg";
import ChartContent from "./chartContent/ChartContent";
import { IProjectValue } from "../../../types/IProject";

const ChartBox = (props: IProjectValue) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <S.MainContainer
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.SubContainer>
        <S.ContentsBox>
          <S.Title isHover={isHover}>{props.title}</S.Title>
          <S.PlusBtn image={PlusBtn} isHover={isHover} />
          {props.contents.map((value, index) => {
            return (
              <ChartContent
                key={index}
                isHover={isHover}
                title={value.title}
                context={value.context}
                explane={value.explane}
                explaneUrl={value.explaneUrl}
                github={value.github}
              />
            );
          })}
        </S.ContentsBox>
        <S.BackgroundImageBox image={SvgUrl[props.index]} isHover={isHover} />
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ChartBox;
