import styled from "styled-components";

interface IAttributeValue {
  marginLeft?: string;
}

export const MainWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20rem;
`;

export const ExampleStac = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  height: 1.2rem;
  font-size: 1.2rem;
  display: flex;
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid black;
  margin: 0 auto;
`;

export const ContextWrapNav = styled.nav`
  margin-left: ${(props: IAttributeValue) => props.marginLeft};
  display: flex;
  width: 13rem;
`;

export const StacBoxWrap = styled.div`
  height: 50rem;
`;
