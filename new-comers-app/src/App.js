/* import axios from "axios"; */
//import Register from "./components/Register/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HelperVsNC from "./pages/HelperVsNC/HelperVsNC";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HelperVsNC />}></Route>
          <Route path="/register/:option" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
