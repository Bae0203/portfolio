import React, { useState } from "react";
import * as S from "../../../styles/ListBox.style";
import ArrowBtn from "./Arrow/ArrowBtn";
import ListValue from "./ListValue.json";

interface IListBoxProps {
  index: number;
}

const ListBox = (props: IListBoxProps) => {
  const [contextIndex, setContextIndex] = useState<number>(0);
  return (
    <S.MainNavBox>
      <S.Title>{ListValue[props.index].title}</S.Title>
      <S.ContextButtonWrap>
        <ArrowBtn
          endindex={0}
          isRight={false}
          contextIndex={contextIndex}
          setContextIndex={setContextIndex}
        ></ArrowBtn>
        <S.Context>{ListValue[props.index].context[contextIndex]}</S.Context>
        <ArrowBtn
          endindex={ListValue[props.index].context.length - 1}
          isRight={true}
          contextIndex={contextIndex}
          setContextIndex={setContextIndex}
        ></ArrowBtn>
      </S.ContextButtonWrap>
    </S.MainNavBox>
  );
};

export default ListBox;
