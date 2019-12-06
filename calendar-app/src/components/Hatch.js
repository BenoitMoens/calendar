import React from "react";
import { StyledHatch } from "./HatchStyles";

const Hatch = ({ hatchData: { id, text, img, open, }, handleClick }) => (
  <StyledHatch background={img} onClick={() => handleClick(id)}>
    <div className={open ? "front open" : "front"}>
      
    </div>
    <div className={open ? "back open" : "back"}>
      <p>{text}</p>
    </div>
  </StyledHatch>
);

export default Hatch;
