import { Iprors } from "../../types/type";
import "./AboutCard.scss";
import Image from "next/image";

export const AboutCard = ({ children, imgChild }: Iprors) => {
  return (
    <div className="AboutCard">
      <div className="AboutCard-txt">{children}</div>
      <Image src={imgChild} alt="huh" height={100} />
    </div>
  );
};
