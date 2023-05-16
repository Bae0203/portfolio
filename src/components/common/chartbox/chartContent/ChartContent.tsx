import React from "react";
import * as S from "./ChartContent.style";

interface IChartContents {
  isHover: boolean;
  title: string;
  context: string;
  explane?: boolean;
  explaneUrl?: string;
  github?: boolean;
}

const ChartContent = (props: IChartContents) => {
  return (
    <S.ContentWrap isHover={props.isHover}>
      <S.ContentTitle>{props.title}</S.ContentTitle>
      {props.github ? (
        <S.GithubLink href={props.context} target="_blank">
          {props.context}
        </S.GithubLink>
      ) : (
        <S.ContentContext>{props.context}</S.ContentContext>
      )}
      {props.explane === true ? (
        <S.NotionLink href={props.explaneUrl} target="_blank">
          링크 바로가기
        </S.NotionLink>
      ) : null}
    </S.ContentWrap>
  );
};

export default ChartContent;
