import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Counters from "./customHooks/counter";
import FourzeroFourPage from "./routes/FourzeroFourPage";
import Homepage from "./routes/homepage";
import ErrorBoundary from "./routes/ErrorBoundary";
import ErrorBoundaryTest from "./routes/ErrorBoundaryTest";
function App() {
  return (
    <>
      <ErrorBoundary>
        <ul className="navlink">
          <li className="links">
            <Link className="linksto home" to="/">
              Home page{" "}
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/counter">
              Counter page
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/error">
              Error page
            </Link>
          </li>
        </ul>
        <hr></hr>
        <Routes>
          <Route path="*" element={<FourzeroFourPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/counter" element={<Counters />} />
          <Route path="/error" element={<ErrorBoundaryTest />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;
