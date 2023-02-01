//Class component to function component(practice)
import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
///new code start

function Clicked(props) {
  console.log(props);
  let number = 0;
  const [number2, setNumber2] = useState(0);

  const pointing = () => {
    number = number + 1;
    setNumber2(number2 + 1);
    console.log("pointing", number);
  };

  return (
    <main>
      {/* <h1>Number:{props.value}</h1> */}
      {console.log("number:", number, " number2:", number2)}
      <h1>Number:{number}</h1>
      <h1>Number:{number2}</h1>
      <button onClick={pointing}>Pointing</button>
    </main>
  );
}
///new code done
///////////////////////////////////////////////////////////////////////////////
function Square(props) {
  return (
    <button className="square" onClick={() => Clicked(props.value)}>
      {props.value}
    </button>
  );
}
/*
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {}
      </button>
    );
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
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
/*
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  render() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
function Game() {
  // usestate number declare
  // funcion click
  // function board
  
  
  return (
    <div className="game">
      <div className="game-board">
        <Clicked />
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
/*
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
