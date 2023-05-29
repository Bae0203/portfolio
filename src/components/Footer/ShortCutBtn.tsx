import React from "react";
import { useNavigate } from "react-router-dom";

interface IShortCutProps {
  Link: string;
  SvgImage: string;
}

const ShortCutBtn = (props: IShortCutProps) => {
  const Navigate = useNavigate();
  return (
    <a href={props.Link} target="_blank">
      <div>사진</div>
    </a>
  );
};

export default ShortCutBtn;
