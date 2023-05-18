import React from "react";

interface ILinkProps {
  url: string;
}

const ChartLinkContent = (props: ILinkProps) => {
  return (
    <>
      <div>{props.url}</div>
      <div>링크 바로가기</div>
    </>
  );
};

export default ChartLinkContent;
