import React, { Dispatch, SetStateAction } from "react";
import * as S from "../styles/Slogan.style";
import Sticky from "./slogan/Sticky";

interface ISloganProps {
  setSloganHeight: Dispatch<SetStateAction<number>>;
}

const Slogan = (props: ISloganProps) => {
  return (
    <S.SloganBackground>
      <Sticky title="실패를 두려워하지않는 개발자" />
      <Sticky
        context={[
          "항상 성장에 대해 생각하며 실패를 두려워하지않는 개발자",
          "느리지만 꾸준히, 많은 경험을 기반으로 둔 개발자",
          "팀간의 협업을 중시하며 끊임없이 새로운 기술을 갈구하는 개발자",
        ]}
      />
    </S.SloganBackground>
  );
};

export default Slogan;
