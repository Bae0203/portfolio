import React from "react";
import { IStacs } from "../../types/IStacs";
import * as S from "../../styles/StacBox.style";

const StacBox = (props: IStacs) => {
  return (
    <S.MainWrap backgroundColor={props.backgroundColor} color={props.color}>
      <S.ContextWrapNav marginLeft="5%">
        <p>{props.stacName}</p>
      </S.ContextWrapNav>
      <S.ContextWrapNav marginLeft="10%">
        <p>{props.experience}</p>
      </S.ContextWrapNav>
      <S.ContextWrapNav marginLeft="15%">
        <S.UsageWrapNav>
          <S.ProjectContext project={props.Usage.project}>
            프로젝트
          </S.ProjectContext>
          <S.AlgorithmContext algorithm={props.Usage.algorithm}>
            알고리즘
          </S.AlgorithmContext>
        </S.UsageWrapNav>
      </S.ContextWrapNav>
    </S.MainWrap>
  );
};

export default StacBox;
