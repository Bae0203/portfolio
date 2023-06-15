import React from "react";
import * as S from "./ChartLinkContents.style";

interface ILinkProps {
  url: string;
  isHover: boolean;
}

const ChartLinkContent = (props: ILinkProps) => {
  return (
    <S.LinkContentsContainer isHover={props.isHover}>
      <S.LinkContentsSubContainer>
        <S.ShortcutElememt />
        <S.HyperLinkElement href={props.url} target="_blank">
          링크 바로가기 -{">"}
        </S.HyperLinkElement>
      </S.LinkContentsSubContainer>
    </S.LinkContentsContainer>
  );
};

export default ChartLinkContent;
