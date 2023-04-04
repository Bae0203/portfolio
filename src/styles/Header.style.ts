import styled from "styled-components";
interface IIsSlogan {
  isSlogan: boolean;
}

export const Header = styled.header`
  border-bottom: ${(props: IIsSlogan) =>
    props.isSlogan ? "none" : "1px solid #cdcdcd"};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
`;

export const ContextWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
  font-size: 1rem;
  margin-left: 10%;
`;

export const TitleContext = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 20%;
`;
