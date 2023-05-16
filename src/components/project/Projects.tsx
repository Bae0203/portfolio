import React from "react";
import ContentsTitle from "../common/ContentsTitle";
import * as S from "../../styles/Project.style";
import ChartBox from "../common/chartbox/ChartBox";

const Projects = () => {
  return (
    <S.MainNav>
      <ContentsTitle
        title="프로젝트 및 해커톤 활동"
        context="하나하나 저의 소중한 경험과 실패, 성공입니다."
      />
      <ChartBox></ChartBox>
    </S.MainNav>
  );
};

export default Projects;
