import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import ResultsPage from "./ResultsPage";
import Example from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        direction: "rtl",
      }}
    >
      <Example />

      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<SearchPage setSearchResults={setSearchResults} />}
            />
            <Route
              path="/results"
              element={<ResultsPage results={searchResults} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;