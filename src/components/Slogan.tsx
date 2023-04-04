import React from "react";
import * as S from "../styles/Slogan.style";

const Slogan = () => {
  return (
    <S.SloganBackground>
      <S.Title>실패를 두려워하지않는 개발자</S.Title>
      <S.WrapSubTitle>
        <S.subTitle>
          항상 성장에 대해 생각하며 <br />
          실패를 두려워하지않는 개발자
        </S.subTitle>
        <S.subTitle>
          느리지만 꾸준히,
          <br /> 많은 경험을 기반으로 둔 개발자
        </S.subTitle>
        <S.subTitle>
          팀간의 협업을 중시하며 <br />
          끊임없이 새로운 기술을 갈구하는 개발자
        </S.subTitle>
      </S.WrapSubTitle>
    </S.SloganBackground>
  );
};

export default Slogan;
