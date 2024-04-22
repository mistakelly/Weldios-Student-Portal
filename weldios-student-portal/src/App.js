import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./Pages/main/Registration";
import Login from "./Pages/main/Login";
import Dashboard from "./Pages/sub/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
