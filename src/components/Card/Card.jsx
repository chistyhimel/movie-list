import React from "react";
import { CardContainer, CardImgWrap } from "./Card";

const Card = ({ name, img, duration, year }) => {
  return (
    <>
      <CardContainer>
        <CardImgWrap>
          <img src={img} alt="" />
        </CardImgWrap>
        <h3>{name}</h3>
        <h5>{duration}</h5>
        <h6>{year}</h6>
      </CardContainer>
    </>
  );
};

export default Card;
