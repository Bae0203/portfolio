import styled from "styled-components";

interface IBackgroundImageProps {
  image: string;
  isHover?: boolean;
}

export const MainContainer = styled.nav`
  width: 35rem;
  height: 37rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const BackgroundImageBox = styled.div`
  background-image: url(${(props: IBackgroundImageProps) => props.image});
  background-size: cover;
  opacity: 0.6;
  height: 100%;
  width: 100%;
  transform: scale(1.04);
  filter: ${(props: IBackgroundImageProps) =>
    props.isHover ? "blur(1rem)" : "blur(0)"};
`;

export const ContentsBox = styled.nav`
  position: absolute;
  z-index: 1;
  margin: 10% 5%;
  width: 90%;
  height: 80%;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #4a4d57;
  margin-bottom: 1rem;
  width: 100%;
  word-break: break-all;
`;

export const PlusBtn = styled.div`
  background-image: url(${(props: IBackgroundImageProps) => props.image});
  background-size: cover;
  width: 3rem;
  height: 3rem;
`;
