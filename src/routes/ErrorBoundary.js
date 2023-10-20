import React, { Component } from "react";
import "../style.css";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="errorContainer">
            <i className="errorpage">Ooops.....</i>
            <h1 className="errorpage">
              {" "}
              Something went wrong! <span>🫠</span>{" "}
            </h1>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
