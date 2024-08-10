import React from "react";
import { Iprors } from "@/app/types/type";
import "./NavCard.scss";

const NavCard = ({ titleChild }: Iprors) => {
  return (
    <div className="navCard">
      <p className="navCard__title">{titleChild}</p>
    </div>
  );
};

export default NavCard;
