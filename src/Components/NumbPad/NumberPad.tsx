import React from "react";
import "./NumberPad.css";

interface Props {
  setFormula(): void;
}

export const NumberPad: React.FC<Props> = () => {
  return <div className="numPadContainer"></div>;
};
