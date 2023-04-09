import styled from "styled-components";
import Left from "../asset/Left.svg";
import Right from "../asset/Right.svg";

interface IArrowBtnProps {
  isRight: boolean;
  isOpacity?: boolean;
}

export const MainNavBox = styled.nav`
  width: 100%;
  text-align: center;
  height: 30rem;
  background-color: #ededed;
`;

export const Title = styled.p`
  font-size: 2rem;
  color: #4a4d57;
  letter-spacing: 0.2rem;
  padding-top: 4rem;
`;

export const ContextButtonWrap = styled.nav`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 7rem;
  height: 3rem;
`;

export const Context = styled.p`
  font-size: 1.5rem;
  color: #777777;
  letter-spacing: 0.2rem;
  width: 60%;
  word-break: keep-all;
`;

export const ArrowButton = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-image: url(${(props: IArrowBtnProps) =>
    props.isRight ? Right : Left});
  background-size: cover;
  opacity: ${(props: IArrowBtnProps) => (props.isOpacity ? "0" : "1")};
`;
