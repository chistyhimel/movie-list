import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 19%;
  border: 1px solid lightgray;
  margin-bottom: 1%;

  @media (max-width: 1024px) {
    width: 24%;
  }

  @media (max-width: 768px) {
    width: 32.5%;
  }

  @media (max-width: 560px) {
    width: 49%;
  }
`;

export const CardImgWrap = styled.div`
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
  }
`;
