import styled from "styled-components";
import ShortcutIcon from "../../../../asset/Project/ShortcutIcon.svg";

interface IisHover {
  isHover: boolean;
}

export const ShortcutElememt = styled.div`
  background-image: url(${ShortcutIcon});
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
  margin: 4rem auto;
`;
export const LinkContentsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-itmes: center;
  transition: 0.4s;
  opacity: ${(props: IisHover) => (props.isHover ? "1" : "0")};
`;

export const LinkContentsSubContainer = styled.nav`
  text-align: center;
`;

export const HyperLinkElement = styled.a`
  text-decoration: none;
  color: #4a4d57;
  font-weight: 600;
  font-size: 1.5rem;
  &:hover {
    color: #2a2c33;
  }
  &:active {
    color: #4a4d57;
  }
`;
