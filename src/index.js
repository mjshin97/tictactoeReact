import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Game() {
  const [number2, setNumber2] = useState(0);
  const [num, setNum] = useState([]);
  const [A, sA] = useState([]);
  /*
  function CalculateProgress() {
    return <h2>progress:{}</h2>;
  }
  */
  const CalculateProgress = () => {
    return <h1>CalculateProgress: {num}</h1>;
  };

  const CalculateProgress1 = () => {
    return <h1>CalculateProgress: {num.length}</h1>;
  };

  function Clicked(props) {
    let tempA = 0;
    let tempB = 0;

    console.log(props); //print clicked value
    setNum(props);
    setNumber2(number2 + props);

    tempA = A;
    tempA = A + props;
    sA(tempA);

    console.log(tempA); //sA
    setNum(tempA);
  }

  function Square(props) {
    return (
      <button className="square" onClick={() => Clicked(props.value)}>
        {props.value}
      </button>
    );
  }

  function Click() {
    return <h1>Result:{number2}</h1>;
  }

  function renderSquare(i) {
    return <Square value={i} />;
  }

  function InitialisePage() {
    // window.location.reload(false);
    setNumber2(0);
  }

  function InitialiseButton() {
    return (
      <div>
        <button onClick={InitialisePage}>Click here for Initialise</button>
      </div>
    );
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
        {/* <Clicked /> */}
        <CalculateProgress />
        <CalculateProgress1 />
        <Click />
        <Board />
        <InitialiseButton />
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
