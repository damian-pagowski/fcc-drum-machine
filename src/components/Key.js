import React from "react";

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.key = React.createRef();
  }
  handleKeyPress = e => {
    this.setState({ currentKey: e.keyCode });
    if (e.keyCode == this.props.data.code) {
      this.key.current.click();
    }
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyPress);
  };

  render = () => {
    return (
      <a onClick={this.props.play} accessKey={this.props.data.key}>
        <li
          className="drum-pad"
          key={this.props.data.key}
          id={this.props.data.key}
          code={this.props.data.code}

          ref={this.key}
        >
          {this.props.data.key}
          <audio src={this.props.data.url}     
              type="audio/mpeg" className="clip" id={this.props.data.key}/>
        </li>
      </a>
    );
  };
}
