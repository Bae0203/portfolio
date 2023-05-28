import React from "react";
import * as S from "./FooterContents.style";

interface IContetnsProps {
  title: string;
  context: {
    title?: string;
    value: string[];
  };
}

const FooterContents = (props: IContetnsProps) => {
  return (
    <div>
      <p>{props.title}</p>
      <S.ContextContainer>
        {props.context.title && (
          <S.ContextTitle>{props.context.title} </S.ContextTitle>
        )}
        <div>
          {props.context.value.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
        </div>
      </S.ContextContainer>
    </div>
  );
};

export default FooterContents;
