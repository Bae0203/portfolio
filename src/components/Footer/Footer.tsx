import React from "react";
import FooterValue from "./FooterValue.json";
import FooterContents from "./FooterContents";
import * as S from "../../styles/Footer.style";
import ShortCutBtn from "./ShortCutBtn";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.MainContainer>
        <S.ContentsContainer>
          {FooterValue.contentValue.map((value) => {
            return (
              <FooterContents
                title={value.title}
                context={{
                  title: value.content.title,
                  value: value.content.context,
                }}
              />
            );
          })}
        </S.ContentsContainer>
        <S.ShortCutContainer>
          {FooterValue.ShortCutBtn.map((value, index) => {
            return <ShortCutBtn Link={value} SvgImage="" key={index} />;
          })}
        </S.ShortCutContainer>
      </S.MainContainer>
    </S.FooterContainer>
  );
};

export default Footer;
