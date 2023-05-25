import React, { useRef } from "react";
import * as S from "./Sticky.style";

interface ISloganProps {
  title?: string;
  context?: string[];
}

const Sticky = (props: ISloganProps) => {
  const parentsRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  return (
    <S.StickyContainer>
      <S.Sticky ref={parentsRef}>
        <div ref={childRef}>
          {props.title ? (
            <S.Title>{props.title}</S.Title>
          ) : (
            props.context && (
              <S.WrapSubTitle>
                {props.context.map((e) => {
                  return <S.subTitle>{e}</S.subTitle>;
                })}
              </S.WrapSubTitle>
            )
          )}
        </div>
      </S.Sticky>
    </S.StickyContainer>
  );
};

export default Sticky;
