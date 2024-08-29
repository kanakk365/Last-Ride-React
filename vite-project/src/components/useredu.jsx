import React, { useReducer } from "react";

const initialState = {
  showtext: false,
  change: false,
};
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT = "CHANGE_TEXT";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return { ...state, showtext: false };
    case SHOW_TEXT:
      return { ...state, showtext: true };
    case CHANGE_TEXT:
      return { ...state, change: !state.change };

    default:
      break;
  }
}

function UseRed() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.showtext ? (
        <h1 style={{ backgroundColor: state.change ? "red" : "blue" }}>
          I AM THE TEXT THAT YOU ARE FUCKING WITH
        </h1>
      ) : null}
      <button onClick={() => dispatch({ type: "SHOW_TEXT" })}>Show</button>
      <button onClick={() => dispatch({ type: "HIDE_TEXT" })}>Hide</button>
      <button onClick={() => dispatch({ type: "CHANGE_TEXT" })}>Change</button>
    </div>
  );
}

export default UseRed;
