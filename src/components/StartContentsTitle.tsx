import React from "react";
import * as S from "../styles/StartContentTitle.style";

interface IContentsProps {
  title: string;
  context: string;
}

const Contents = (props: IContentsProps) => {
  return (
    <S.ContentWarp>
      <S.Title>{props.title}</S.Title>
      <S.Context>{props.context}</S.Context>
    </S.ContentWarp>
  );
};

export default Contents;
