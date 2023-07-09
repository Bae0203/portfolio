import React, { useEffect, useRef, useState } from "react";
import * as S from "./Sticky.style";

interface ISloganProps {
  title?: string;
  context?: string[];
}

const Sticky = (props: ISloganProps) => {
  const parentsRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const ComponentElement = parentsRef.current;
    if (!ComponentElement) return;
    const componentRect = ComponentElement.getBoundingClientRect();
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const parentElement = parentsRef.current;
      const childElement = childRef.current;
      if (!parentElement || !childElement) return;

      const parentRect = parentElement.getBoundingClientRect();
      const parentHeight = parentRect.height;
      const childRect = childElement.getBoundingClientRect();
      const childHeight = childRect.height;
      const MinHeight: number = componentRect.top + childHeight; //현재 높이 + 자신의 높이
      const MaxHeight: number = componentRect.top + parentHeight; //현재높이

      const scrollPercent = MaxHeight - MinHeight;
      console.log(props.title, childRect.top, parentRect.top, scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <S.StickyContainer ref={parentsRef}>
      <S.Sticky ref={childRef}>
        <div>
          {props.title ? (
            <S.Title>{props.title}</S.Title>
          ) : (
            props.context && (
              <S.WrapSubTitle>
                {props.context.map((e, i) => {
                  return <S.subTitle key={i}>{e}</S.subTitle>;
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
