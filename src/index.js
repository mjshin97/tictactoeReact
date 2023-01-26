//uncompleted code
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  //modified from here---
  renderSquare(i) {
    if (i < 25) return <Square value={i} />;
    else return <Square value={null} />;
  }
  //modified until here---
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
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
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
        <div className="board-row">
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(25).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const width = [];

  for (let x = 0; x < 25; x++) {
    width.push(x);
  }

  var liness = [];
  var count = 0;
  var end = -2;

  const lines = new Array();

  for (let k = 0; k < 5; k++) {
    for (let z = 0; z <= 3; z++) {
      for (let j = count; j < 25; j++) {
        liness = width.slice(j, j + 3);
        lines.push(liness);

        if (end % 3 == 0) {
          count += 2;
          break;
        }
        break;
      }
      count += 1;
      end += 1;
    }
  }

  var height = 0;
  var heightval = [];

  for (let y = 0; y < 5; y++) {
    for (let z = 0; z < 5; z++) {
      heightval.push(height);
      height += 5;
      if (height >= 25) {
        break;
      }
    }

    height = (height % 20) - 4;
  }

  var heightCount = 0;
  var heightEnd = -2;

  for (let w = 0; w < 5; w++) {
    for (let e = 0; e <= 3; e++) {
      for (let r = heightCount; r < 25; r++) {
        liness = heightval.slice(r, r + 3);
        lines.push(liness);

        if (heightEnd % 3 == 0) {
          heightCount += 2;
          break;
        }
        break;
      }
      heightCount += 1;
      heightEnd += 1;
    }
  }

  var a = 0;
  var b = 0;
  var c = 0;
  var crossCount = 0;
  var crossLines = [];

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      a = width.indexOf(y + crossCount);
      b = width.indexOf(y + 6 * 1 + crossCount);
      c = width.indexOf(y + 6 * 2 + crossCount);
      lines.push([a, b, c]);
    }
    crossCount += 5;
  }

  crossCount = 0;

  for (let x = 0; x < 3; x++) {
    for (let y = 2; y < 5; y++) {
      a = width.indexOf(y + crossCount);
      b = width.indexOf(y + 4 * 1 + crossCount);
      c = width.indexOf(y + 4 * 2 + crossCount);
      lines.push([a, b, c]);
    }
    crossCount += 5;
  }

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  for (let i = 0; i < 25; i++) {
    if (squares[i] === null) {
      return null;
    }
  }
  return 25; //In the case of a tie, return 25
}
//reference : https://kamro17.tistory.com/79
