import React from "react";
import "./TxtCard.css";
import { Iprors } from "../../types/type";

const TxtCard = ({ children, titleChild }: Iprors) => {
  return (
    <div className="TxtCard">
      <p className="TxtCard_Title">{titleChild}</p>
      <p className="TxtCard_Txt">{children}</p>
    </div>
  );
};

export default TxtCard;
