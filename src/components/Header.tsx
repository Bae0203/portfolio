import React, { useEffect } from "react";
import * as S from "../styles/Header.style";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    //console.log(window.scrollY);
  };
  return (
    <S.Header isSlogan={true}>
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
