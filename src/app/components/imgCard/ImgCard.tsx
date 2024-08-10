import React from "react";
import "./ImgCard.css";
import { Iprors } from "../../types/type";
import Image from "next/image";

const ImgCard = ({ imgChild }: Iprors) => {
  return (
    <div className="ImgCard">
      <Image src={imgChild} alt="Huh" />
    </div>
  );
};

export default ImgCard;
