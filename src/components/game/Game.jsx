import { Component } from "react";
// components
import { Board } from "./index";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Game;
