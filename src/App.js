import React from "react";
import "./App.css";
import Keypad from "./components/Kaypad";

function App() {
  return (
    <div className="App" id="drum-machine">
      <Keypad />
    </div>
  );
}

function play() {
  console.log("playing...");
  var audio = document.getElementById("audio");
  audio.play();
}
export default App;
