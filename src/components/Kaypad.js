import { Component } from "react";
import Key from './Key'
export default class Keypad extends Component {
    render() {
        const keys = ["q", 'w', 'e', 'w', 's', 'd', 'z', 'x', 'c']
    return <ul id="keypad">
        {keys.map(k => <Key data={k}/>) }
    </ul>;
  }
}
