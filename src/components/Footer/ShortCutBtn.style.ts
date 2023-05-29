import styled from "styled-components";

interface IImageProps {
  SvgImage: string;
}

export const MainATag = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${(props: IImageProps) => props.SvgImage});
  background-size: cover;
  margin-right: 1.5rem;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;
