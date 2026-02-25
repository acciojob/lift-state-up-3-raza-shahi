
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className="parent">
        <h1>Parant Component</h1>
        <ChildComponent1 handleOptionChange={handleOptionChange} />
        <ChildComponent2 handleOptionChange={handleOptionChange} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
