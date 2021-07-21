import React, { Dispatch, SetStateAction } from "react";
import "./NumberPad.css";

interface Props {
  setFormula: Dispatch<SetStateAction<string>>;
}

export const NumberPad: React.FC<Props> = ({ setFormula }: Props) => {
  const handleClick = (input: string) => {
    setFormula((prev) => {
      return prev + input;
    });
  };

  return (
    <div className="numPadContainer">
      <button
        className="key"
        id="open-bracket"
        onClick={() => handleClick("(")}
      >
        (
      </button>
      <button
        className="key"
        id="closing-bracket"
        onClick={() => handleClick(")")}
      >
        )
      </button>
      <button
        className="key"
        id="back-space"
        onClick={() => setFormula((prev) => prev.slice(0, prev.length - 1))}
      >
        CE
      </button>
      <button className="key" id="cancel-entry" onClick={() => setFormula("")}>
        C
      </button>
      <button className="key" id="seven" onClick={() => handleClick("7")}>
        7
      </button>
      <button className="key" id="eight" onClick={() => handleClick("8")}>
        8
      </button>
      <button className="key" id="nine" onClick={() => handleClick("9")}>
        9
      </button>
      <button className="key" id="divide" onClick={() => handleClick("/")}>
        /
      </button>
      <button className="key" id="four" onClick={() => handleClick("4")}>
        4
      </button>
      <button className="key" id="five" onClick={() => handleClick("5")}>
        5
      </button>
      <button className="key" id="six" onClick={() => handleClick("6")}>
        6
      </button>
      <button className="key" id="multiply" onClick={() => handleClick("*")}>
        *
      </button>
      <button className="key" id="one" onClick={() => handleClick("1")}>
        1
      </button>
      <button className="key" id="two" onClick={() => handleClick("2")}>
        2
      </button>
      <button className="key" id="three" onClick={() => handleClick("3")}>
        3
      </button>
      <button className="key" id="minus" onClick={() => handleClick("-")}>
        -
      </button>
      <button className="key" id="decimal" onClick={() => handleClick(".")}>
        .
      </button>
      <button className="key" id="zero" onClick={() => handleClick("0")}>
        0
      </button>
      <button className="key" id="negative" onClick={() => handleClick("-")}>
        -/+
      </button>
      <button className="key" id="plus" onClick={() => handleClick("+")}>
        +
      </button>
    </div>
  );
};
