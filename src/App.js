import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({ val: [1], count: 1 });
  const [state2, setState2] = useState({
    val: [1],
    count: 1
  });
  const increment = () => {
    setState((state) => ({
      ...state,
      count: state2.val[state2.val.length - 1] + 1
    }));
    setState2((state) => ({
      ...state,
      val: [...state.val, state.val[state.val.length - 1] + 1],
      count: state2.val[state2.val.length - 1] + 1
    }));
  };

  const decrement = () => {
    let lastVal = state2.val[state2.val.length - 1];
    let finalVal = state2.val.filter((item) => {
      return item !== lastVal;
    });
    setState((state) => ({
      ...state,
      count: finalVal[finalVal.length - 1]
    }));
    setState2((state) => ({
      ...state,
      val: finalVal,
      count: finalVal[finalVal.length - 1]
    }));
  };
  console.log(state2);
  return (
    <div className="App">
      <button onClick={() => increment()}>INC</button>
      <p>{state.count}</p>
      <div>{console.log("-->", state)}</div>
      <button onClick={() => decrement()}>DEC</button>
    </div>
  );
}
