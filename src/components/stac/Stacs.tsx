import React, { useState } from "react";
import { IStacs } from "../../types/IStacs";
import ContentsTitle from "../common/ContentsTitle";
import StacBox from "./StacBox";
import stacValue from "./stacValue.json";
import * as S from "../../styles/Stacs.style";

const Stacs = () => {
  const [stacList] = useState<IStacs[]>(stacValue);
  return (
    <S.MainWrap>
      <ContentsTitle title="스택" context={null} />
      <S.ExampleStac>
        <S.ContextWrapNav marginLeft="5%">
          <p>기술명</p>
        </S.ContextWrapNav>
        <S.ContextWrapNav marginLeft="10%">
          <p>숙련도</p>
        </S.ContextWrapNav>
        <S.ContextWrapNav marginLeft="15%">
          <p>활용 용도</p>
        </S.ContextWrapNav>
      </S.ExampleStac>
      <S.StacBoxWrap>
        {stacList.map((value, index) => {
          return (
            <StacBox
              stacName={value.stacName}
              experience={value.experience}
              Usage={value.Usage}
              backgroundColor={value.backgroundColor}
              color={value.color}
              key={index}
            />
          );
        })}
      </S.StacBoxWrap>
    </S.MainWrap>
  );
};

export default Stacs;
