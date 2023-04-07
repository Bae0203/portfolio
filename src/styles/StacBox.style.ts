import styled from "styled-components";

interface IAttributeValue {
  backgroundColor?: string;
  color?: string;
  marginLeft?: string;
  project?: boolean;
  algorithm?: boolean;
}

export const MainWrap = styled.div`
  width: 100%;
  background-color: ${(props: IAttributeValue) => props.backgroundColor};
  color: ${(props: IAttributeValue) => props.color};
  font-size: 1.2rem;
  display: flex;
  padding: 2rem;
  border-radius: 1.2rem;
  margin: 0 auto;
  margin-top: 2rem;
  height: 1.2rem;
`;

export const ContextWrapNav = styled.nav`
  margin-left: ${(props: IAttributeValue) => props.marginLeft};
  display: flex;
  position: absolute;
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
