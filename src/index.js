import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Game() {
  const [number2, setNumber2] = useState(0);
  const [num, setNum] = useState([]);
  const [A, sA] = useState([]);
  const [B, sB] = useState([]);
  const [index] = useState(0);

  const CalculateProgress = () => {
    let newStr = num.slice(0, -1);
    newStr = newStr.concat(" =");

    return (
      <h1>
        CalculateProgress: {newStr} {number2}{" "}
      </h1>
    );
  };
  ///////////////////////////////////////////////////////

  // const CalculateProgress4 = () => {
  //   let arrayTemp = B; //'item' is reffering 'B'
  //   let returnString = arrayTemp.map((item, index) => `+${item}`);
  //   console.log(returnString);

  //   if (index === 0) {
  //     returnString[0] = num[0]; //!!!!!!!!!!!!!!!!!!!!!!!
  //   }

  //   return <h1>CalculateProgressM: {returnString}</h1>;
  // };

  const CalculateProgress4 = () => {
    let arrayTemp = B; //'item' is reffering 'B'
    let returnString = arrayTemp.map((item, index) => {
      // `+${item}`;

      console.log(item);
      console.log(item);
      console.log(item);

      // if(index === 0){
      //   return item;
      // }
      // else{
      //   return "+" + item;
      // }

      return index === 0 ? item : "+" + item;
    });
    console.log(returnString);

    // if (index === 0) {
    //   returnString[0] = num[0]; //!!!!!!!!!!!!!!!!!!!!!!!
    // }

    return <h1>계산: {returnString}</h1>;
  };

  /////////////////////////////////////////////////////////
  function Clicked(props) {
    let tempA = 0;

    console.log(props); //print clicked value
    setNum(props);
    setNumber2(number2 + props);

    // tempB = B;
    // tempB = B + props;
    // sB(tempB);

    let tempC = [];
    tempC = B;
    tempC.push(props);
    sB(tempC);

    tempA = A;
    tempA = A + props + "+";
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
    return <h1>결과: {number2 === 0 ? null : number2}</h1>;
  }

  function renderSquare(i) {
    return <Square value={i} />;
  }

  function InitialisePage() {
    //window.location.reload(false);

    setNumber2(0);
    sA([]);
    sB([]);
    setNum([]);
  }

  function InitialiseButton() {
    return (
      <div>
        <button onClick={InitialisePage}>초기화</button>
      </div>
    );
  }

  function Board() {
    const status = null;
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

  function Total() {}

  return (
    <div className="game">
      <div className="game-board">
        {/* <Clicked /> */}

        <Board />
        <CalculateProgress4 />
        <Click />
        <InitialiseButton />
        <Total />
        {/* <CalculateProgress /> */}
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
