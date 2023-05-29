import React from "react";
import FooterValue from "./FooterValue.json";
import FooterContents from "./FooterContents";
import * as S from "../../styles/Footer.style";
import ShortCutBtn from "./ShortCutBtn";
import SvgImage from "./useShortCutSvg";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.MainContainer>
        <S.ContentsContainer>
          {FooterValue.contentValue.map((value, index) => {
            return (
              <FooterContents
                key={index}
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
            return (
              <ShortCutBtn
                Link={value}
                SvgImage={SvgImage[index]}
                key={index}
              />
            );
          })}
        </S.ShortCutContainer>
      </S.MainContainer>
    </S.FooterContainer>
  );
};

export default Footer;
