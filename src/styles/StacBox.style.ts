import styled from "styled-components";

interface IAttributeValue {
  backgroundColor?: string;
  color?: string;
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
`;