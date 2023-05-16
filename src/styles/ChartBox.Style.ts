import styled from "styled-components";

interface IBackgroundImageProps {
  image: string;
  isHover?: boolean;
}

interface IisHover {
  isHover: boolean;
}

export const MainContainer = styled.nav`
  width: 37rem;
  height: 39rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;
`;

export const BackgroundImageBox = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
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
  margin: 8% 5%;
  width: 90%;
  height: 80%;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: ${(props: IisHover) => (props.isHover ? "2rem" : "2.25rem")};
  font-weight: bold;
  color: #4a4d57;
  margin-bottom: 3rem;
  width: 100%;
  word-break: keep-all;
  transition: 0.2s;
`;

export const PlusBtn = styled.div`
  background-image: url(${(props: IBackgroundImageProps) => props.image});
  background-size: cover;
  margin-top: -3rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  opacity: ${(props: IBackgroundImageProps) => (props.isHover ? "0" : "1")};
  transition: 0.2s;
`;
export const SubContainer = styled.nav`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
