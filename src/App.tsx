import React from "react";
import { Nabar, Home, UserState } from "./components";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="w-[100% ] relative  overflow-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nabar />
                <Home />
              </div>
            }
          />
          <Route path="/user" element={<UserState />} />
          {/* <Route path="sign" element={<Sign />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

function cube (){
  
}

export default App;
