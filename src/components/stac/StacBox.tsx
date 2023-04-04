import React from "react";
import { IStacs } from "../../types/IStacs";
import * as S from "../../styles/StacBox.style";

const StacBox = (props: IStacs) => {
  return (
    <S.MainWrap backgroundColor={props.backgroundColor} color={props.color}>
      <S.ContextWrapNav marginLeft="5%">
        <p>{props.stacName}</p>
      </S.ContextWrapNav>
      <S.ContextWrapNav marginLeft="25%">
        <p>{props.experience}</p>
      </S.ContextWrapNav>
      <S.ContextWrapNav marginLeft="20%">
        {props.Usage.project ? <p>프로젝트</p> : null}
        {props.Usage.algorithm ? <p>알고리즘</p> : null}
      </S.ContextWrapNav>
    </S.MainWrap>
  );
};

export default StacBox;
