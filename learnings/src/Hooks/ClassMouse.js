import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X: 0,
      Y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ X: e.clientX, Y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        X - {this.state.X} Y - {this.state.Y}
      </div>
    );
  }
}

export default ClassMouse;
