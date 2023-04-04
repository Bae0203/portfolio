import React from "react";
import { IStacs } from "../../types/IStacs";
import * as S from "../../styles/StacBox.style";

const StacBox = (props: IStacs) => {
  return (
    <S.MainWrap backgroundColor={props.backgroundColor} color={props.color}>
      <p>{props.stacName}</p>
      <p>{props.experience}</p>
      <nav>
        {props.Usage.project ? <p>프로젝트</p> : null}
        {props.Usage.algorithm ? <p>알고리즘</p> : null}
      </nav>
    </S.MainWrap>
  );
};

export default StacBox;
