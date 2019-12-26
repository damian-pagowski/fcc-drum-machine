import { Component } from "react";
import React from "react";
import Key from "./Key";
export default class Keypad extends Component {
  render() {
    const data = this.props.data;
    return (
      <ul id="keypad">
        {Object.values(data).map(k => (
          <Key data={k} play={this.props.play} />
        ))}
      </ul>
    );
  }
}
