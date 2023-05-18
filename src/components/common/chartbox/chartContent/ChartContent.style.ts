import styled from "styled-components";

interface IisHover {
  isHover: boolean;
}

export const ContentWrap = styled.nav`
  transition: 0.4s;
  opacity: ${(props: IisHover) => (props.isHover ? "1" : "0")};
  margin-bottom: 1.5rem;
`;

export const ContentTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #4a4d57;
  width: 80%;
  word-break: keep-all;
  letter-spacing: 0.2rem;
`;

export const ContentContext = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #555555;
  width: 80%;
  word-break: keep-all;
  letter-spacing: 0.1rem;
  text-shadow: -1px 0 rgba(255, 255, 255, 0.4), 0 1px rgba(255, 255, 255, 0.4),
    1px 0 rgba(255, 255, 255, 0.4), 0 -1px rgba(255, 255, 255, 0.4);
`;

export const GithubLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #555555;
  width: 80%;
  word-break: keep-all;
  letter-spacing: 0.1rem;
  text-shadow: -1px 0 rgba(255, 255, 255, 0.4), 0 1px rgba(255, 255, 255, 0.4),
    1px 0 rgba(255, 255, 255, 0.4), 0 -1px rgba(255, 255, 255, 0.4);
  &:hover {
    text-decoration: none;
    color: #555555;
  }
  &:active {
    text-decoration: none;
    color: #ㅋ;
  }
`;

export const NotionLink = styled.a`
  color: #504f65;
  font-size: 1.15rem;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  text-shadow: -1px 0 rgba(255, 255, 255, 0.4), 0 1px rgba(255, 255, 255, 0.4),
    1px 0 rgba(255, 255, 255, 0.4), 0 -1px rgba(255, 255, 255, 0.4);
  &:hover {
    text-decoration: none;
    color: #404051;
  }
  &:active {
    text-decoration: none;
    color: #2a2a33;
  }
`;
