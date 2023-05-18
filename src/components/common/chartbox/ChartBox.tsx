import React, { useState } from "react";
import * as S from "../../../styles/ChartBox.Style";
import { PlusBtn } from "./useChartBox";
import { SvgUrl } from "./useChartBackgroundSvg";
import { LinkSvgUrl } from "./useChartLinkBackgroundSvg";
import ChartContent from "./chartContent/ChartContent";
import { IProjectValue } from "../../../types/IProject";
import ChartLinkContent from "./chartContent/ChartLinkContent";

const ChartBox = (props: IProjectValue) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <S.MainContainer
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.SubContainer>
        <S.ContentsBox>
          <S.Title>{props.title}</S.Title>
          <S.PlusBtn image={PlusBtn} isHover={isHover} />
          <S.ChartContainer isHover={isHover}>
            {props.contents ? (
              props.contents.map((value, index) => {
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
              })
            ) : (
              <ChartLinkContent url={props.url ? props.url : ""} />
            )}
          </S.ChartContainer>
        </S.ContentsBox>
        <S.BackgroundImageBox
          image={props.isLink ? LinkSvgUrl[props.index] : SvgUrl[props.index]}
          isHover={isHover}
        />
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ChartBox;
