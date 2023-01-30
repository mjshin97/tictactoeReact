//uncompleted code
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      getVal: props.tempVal,
    };
    console.log("props", props);
  }

  ///
  plus(props) {
    this.value = {};
  }
  ///
  render() {
    return (
      <button className="square" onClick={() => this.setState({ getVal: "" })}>
        {this.state.value}
        {this.state.getVal}
        {/* {this.props.value} */}
        {console.log(this.props.value + " Clicked")}
      </button>
    );
  }
}

function getNum(inputNum){
  
  return inputNum
}

class Board extends React.Component {
  renderSquare(i) {
    //
    return <Square value={i} tempVal={i} />;
  }

  

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(getNum(8))}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
          <Meetjul />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Meetjul extends React.Component {

  
  /*
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      getVal: props.tempVal,
    };
    console.log("props", props);
  }
  */

  render() {
    return (
      <div>
        {console.log()}
        
        _________________
      </div>
    );

  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
