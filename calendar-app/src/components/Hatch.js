import React from "react";
import { StyledHatch } from "./HatchStyles";

const Hatch = ({ hatchData: { id, text, img, open, isLocked }, handleClick }) => (
  <StyledHatch background={img} onClick={isLocked ? () => alert("Tu es impatient") :() => handleClick(id)}>
   
    <div className={open ? "front " : "front open"}>
      
    </div>
    <div className={open ? "back " : "back open"}>
      <p>{text}</p>
    </div>
  </StyledHatch>
);

export default Hatch;
