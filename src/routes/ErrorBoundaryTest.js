import React from "react";
import "../style.css";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
function ErrorBoundaryTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error(
      "gosh!.....  there seems to be an error somewhere in this page "
    );
  }
  return (
    <div className="errorpagetest">
      <h1>Error Boundary Test :</h1>
      <p>
        <button className="errorbtn" onClick={() => setHasError(true)}>
          ErrorBoundary test
        </button>
        <ErrorBoundary />
      </p>
    </div>
  );
}

export default ErrorBoundaryTest;
