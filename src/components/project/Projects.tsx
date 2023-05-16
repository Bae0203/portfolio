import React, { useState } from "react";
import ContentsTitle from "../common/ContentsTitle";
import * as S from "../../styles/Project.style";
import ChartBox from "../common/chartbox/ChartBox";
import ProjectValue from "./ProjectValue.json";
import { IProjectValue } from "../../types/IProject";

const Projects = () => {
  const [projVal] = useState<IProjectValue[]>(ProjectValue.values);
  return (
    <S.MainNav>
      <ContentsTitle
        title="프로젝트 및 해커톤 활동"
        context="하나하나 저의 소중한 경험과 실패, 성공입니다."
      />
      <S.ChartWrap>
        {projVal.map((value, index) => {
          return (
            <ChartBox
              key={index}
              title={value.title}
              contents={value.contents}
              index={index}
            />
          );
        })}
      </S.ChartWrap>
    </S.MainNav>
  );
};

export default Projects;
