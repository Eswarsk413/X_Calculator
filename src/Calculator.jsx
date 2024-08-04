import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (input === "") {
        setOutput("Error"); // Handle equals click directly with no input
      } else {
        try {
          const result = evaluate(input);
          if (isNaN(result)) {
            setOutput("NaN"); // Handle NaN (e.g., 0/0)
          } else if (result === Infinity || result === -Infinity) {
            setOutput("Infinity"); // Handle Infinity (e.g., division by 0)
          } else {
            setOutput(result); // Set the result
          }
        } catch (error) {
          setOutput("Error"); // Handle errors in expression
        }
      }
    } else if (value === "C") {
      setInput(""); // Clear the input
      setOutput(""); // Clear the output
    } else {
      setInput(input + value); // Append value to the input
    }
  };

  const Button = ({ label }) => (
    <button
      onClick={() => handleButtonClick(label)}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "20px",
        margin: "5px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0", // Light gray for better visibility
        border: "1px solid #ccc", // Light border
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            padding: "5px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div
        style={{
          padding: "10px",          
          margin: "0 auto", // Center the output
          textAlign: "center",
          color: '#808080'
        }}
      >
        {output}
      </div>
      <div>
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="+" />
      </div>
      <div>
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
      </div>
      <div>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="*" />
      </div>
      <div>
        <Button label="C" />
        <Button label="0" />
        <Button label="=" />
        <Button label="/" />
      </div>
    </div>
  );
}

export default Calculator;
