import styled from "styled-components";
import Left from "../../../../asset/Left.svg";
import Right from "../../../../asset/Right.svg";

interface IArrowBtnProps {
  isRight: boolean;
  isOpacity?: boolean;
}

export const ArrowButton = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-image: url(${(props: IArrowBtnProps) =>
    props.isRight ? Right : Left});
  background-size: cover;
  opacity: ${(props: IArrowBtnProps) => (props.isOpacity ? "0" : "1")};
`;
