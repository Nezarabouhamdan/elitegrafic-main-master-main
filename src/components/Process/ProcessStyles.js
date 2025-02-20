import styled from "styled-components";
export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: space-around;
  @media screen and (max-width: 968px) {
    height: 30vh;
  }
`;