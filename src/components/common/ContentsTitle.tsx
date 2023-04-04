import React from "react";
import * as S from "../../styles/ContentsTitle.style";

interface IContentsTitleProps {
  title: string;
  context: string | null;
}

const ContentsTitle = (props: IContentsTitleProps) => {
  return (
    <nav>
      <S.Title>{props.title}</S.Title>
      {props.context ? <S.Context>{props.context}</S.Context> : null}
    </nav>
  );
};

export default ContentsTitle;
