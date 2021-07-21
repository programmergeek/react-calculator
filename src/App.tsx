import React, { useState } from "react";
import "./App.css";
import { NumberPad } from "./Components";

const App: React.FC = () => {
  const [formula, setFormal] = useState("");

  return (
    <div className="App">
      <h1> {formula} </h1>
      <NumberPad setFormula={setFormal} />
    </div>
  );
};

export default App;
