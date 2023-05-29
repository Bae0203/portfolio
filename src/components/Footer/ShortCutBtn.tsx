import React from "react";
import * as S from "./ShortCutBtn.style";

interface IShortCutProps {
  Link: string;
  SvgImage: string;
}

const ShortCutBtn = (props: IShortCutProps) => {
  return (
    <S.MainATag href={props.Link} target="_blank" SvgImage={props.SvgImage} />
  );
};

export default ShortCutBtn;
