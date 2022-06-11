import React from "react";
import { StyledSwitch, Slider } from "./SwitchStyles";

const Switch = () => {
  return (
    <StyledSwitch>
      <label>
        <input type="checkbox" />
        <Slider className="slider" />
      </label>
    </StyledSwitch>
  );
};

export default Switch;
