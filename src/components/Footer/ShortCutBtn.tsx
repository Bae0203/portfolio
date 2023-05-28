import React from "react";

interface IShortCutProps {
  Link: string;
  SvgImage: string;
}

const ShortCutBtn = (props: IShortCutProps) => {
  return (
    <div>
      <button>사진</button>
    </div>
  );
};

export default ShortCutBtn;
