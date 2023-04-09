import React, { Dispatch, SetStateAction } from "react";
import * as S from "./ArrowBtn.style";

interface IArrowBtnProps {
  endindex: number;
  isRight: boolean;
  contextIndex: number;
  setContextIndex: Dispatch<SetStateAction<number>>;
}

const ArrowBtn = (props: IArrowBtnProps) => {
  const OnClickBtn = () => {
    if (props.isRight) {
      props.setContextIndex(props.contextIndex + 1);
    } else {
      props.setContextIndex(props.contextIndex - 1);
    }
  };

  return (
    <>
      {props.contextIndex === props.endindex ? (
        <S.ArrowButton isRight={props.isRight} isOpacity={true}></S.ArrowButton>
      ) : (
        <S.ArrowButton
          isRight={props.isRight}
          onClick={OnClickBtn}
        ></S.ArrowButton>
      )}
    </>
  );
};

export default ArrowBtn;
