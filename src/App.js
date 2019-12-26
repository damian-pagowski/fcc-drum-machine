import React, { Component } from "react";
import "./App.css";
import Keypad from "./components/Kaypad";

const data = {
  Q: {
    key: "Q",
    code: 81,
    name: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  W: {
    key: "W",
    code: 87,
    name: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  E: {
    key: "E",
    code: 69,
    name: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  A: {
    key: "A",
    code: 65,
    name: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  S: {
    key: "S",
    code: 83,
    name: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  D: {
    key: "D",
    code: 68,
    name: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  Z: {
    key: "Z",
    code: 90,
    name: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  X: {
    key: "X",
    code: 88,
    name: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  C: {
    key: "C",
    code: 67,
    name: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
};

class App extends Component {
  state = {
    current: "",
  };

  play = elm => {
    if (elm.target.children[0] && data[elm.target.id]) {
      this.setState({ current: data[elm.target.id].name });
      elm.target.children[0].play();
    }
  };

  render() {
    return (
      <div className="App" id="drum-machine">
        <div id="main">
          <p id="now-playing">Now playing</p>
          <p id="sample-name"> {this.state.current || "READY..."}</p>
          <p id="title">damian's drum machine</p>
        </div>
        <Keypad data={data} play={this.play} />
      </div>
    );
  }
}

export default App;
