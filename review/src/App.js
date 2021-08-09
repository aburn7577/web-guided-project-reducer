import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";

let currentState = initialState;

const addAction = (input) => {
  return ({type:"ADD", payload:input})
}


console.log("currentState: ", currentState);
currentState = reducer(currentState, addAction(5));
console.log("currentState: ", currentState);

currentState = reducer(currentState, addAction(500000));
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"SUBTRACT", payload:2});
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"ADD_TO_MEMORY"});
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"CLEAR"});
console.log("currentState: ", currentState);

export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
