//Class component to function component(practice)
import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Game() {
  function Clicked(props) {
    console.log(props);
  }

  function Square(props) {
    return (
      <button className="square" onClick={() => Clicked(props.value)}>
        {props.value}
      </button>
    );
  }
  // usestate number declare
  const [number2, setNumber2] = useState(0);
  
  //use "setNumber2" to change basic value of "useState"

  // funcion click
  function Click(props) {
    return <h1>Number:{number2}</h1>;
  }

  // function board
  function renderSquare(i) {
    return <Square value={i} />;
  }
  
  function Board() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      <div className="game-board">
        <Clicked />
        <Click />
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
