import React from "react";
import * as S from "../../styles/ContentsTitle.style";

interface IContentsTitleProps {
  title: string;
  context: string | null;
}

const ContentsTitle = (props: IContentsTitleProps) => {
  return (
    <S.ContentWrap>
      <S.Title>{props.title}</S.Title>
      {props.context ? <S.Context>{props.context}</S.Context> : null}
    </S.ContentWrap>
  );
};

export default ContentsTitle;
