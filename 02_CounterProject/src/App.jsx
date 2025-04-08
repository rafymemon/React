import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  //  let counter = 5;

  const addValue = () => {
    if (counter == 20) {
      setCounter(20);
    } else {
      counter = counter+1;
      setCounter(counter);
    }
  };
  const removeValue = () => {
    if(counter <= 0) {
      setCounter(0);
  } else {
    counter = counter -1;
    setCounter(counter);
  }
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
