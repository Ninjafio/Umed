import React from "react";
import "./WorkBlockCard.scss";
import { Iprors } from "@/app/types/type";

const WorkBlockCard = ({ children, titleChild }: Iprors) => {
  return (
    <div className="WorkBlockCard">
      <p className="WorkBlockCard_Title">{titleChild}</p>
      <p className="WorkBlockCard_Txt">{children}</p>
    </div>
  );
};

export default WorkBlockCard;
