import styled from "styled-components";

export const Title = styled.p`
  padding-top: 20rem;
  font-size: 3.375rem;
  letter-spacing: 0.1em;
  font-weight: 700;
`;

export const subTitle = styled.p`
  margin-top: 5rem;
  font-size: 1.2rem;
  letter-spacing: 0.4em;
  line-height: 2rem;
`;

export const WrapSubTitle = styled.nav`
  padding-top: 30rem;
  margin-bottom: 20rem;
`;

export const StickyContainer = styled.nav`
  width: 100%;
  height: 140rem;
  background-color: tomato;
  margin-bottom: 30rem;
`;

export const Sticky = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 40rem;
  background-color: green;
  top: 0;
`;
