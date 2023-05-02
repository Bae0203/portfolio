import styled from "styled-components";

interface IAttributeValue {
  backgroundColor?: string;
  color?: string;
  marginLeft?: string;
  project?: boolean;
  algorithm?: boolean;
}

export const MainWrap = styled.div`
  background-color: ${(props: IAttributeValue) => props.backgroundColor};
  color: ${(props: IAttributeValue) => props.color};
  font-size: 1.2rem;
  display: flex;
  padding: 2rem;
  border-radius: 1.2rem;
  height: 1.2rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  transition: 0.2s;
  &:hover {
    filter: drop-shadow(
      0rem 1.5rem 2rem ${(props: IAttributeValue) => props.backgroundColor}
    );
  }
`;

export const ContextWrapNav = styled.nav`
  margin-left: ${(props: IAttributeValue) => props.marginLeft};
  display: flex;
  width: 13rem;
`;

export const UsageWrapNav = styled.nav`
  display: flex;
  width: 15rem;
  justify-content: space-between;
`;

export const ProjectContext = styled.p`
  opacity: ${(props: IAttributeValue) => (props.project ? `1` : `0`)};
`;

export const AlgorithmContext = styled.p`
  opacity: ${(props: IAttributeValue) => (props.algorithm ? `1` : `0`)};
`;
