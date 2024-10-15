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
      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
        <Example />
        <h3
          style={{
            textAlign: "right",
            direction: "rtl",
            fontSize: "1rem",
            
            marginTop: '10px'
  
          }}
        >
          חנויות המכבדות את כרטיס "חסדי יום טוב "
        </h3>{" "}
      </div>
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
