import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./Pages/main/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
