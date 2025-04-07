import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  //  let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    if (counter == 20) {
      setValue(20);
    } else {
      setCounter(counter);
    }
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("value removed", counter);
  };
  return (
    <>
      <h1>Learning React </h1>
      <h2>Counter Value :{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <hr />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Total Value : {counter}</p>
    </>
  );
}

export default App;
