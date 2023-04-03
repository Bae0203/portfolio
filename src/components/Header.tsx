import React from "react";
import * as S from "../styles/Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.TitleContext>배경민의 포트폴리오</S.TitleContext>
      <S.ContextWrap>
        <p>연락처</p>
        <p>깃허브</p>
        <p>블로그</p>
      </S.ContextWrap>
    </S.Header>
  );
};

export default Header;
