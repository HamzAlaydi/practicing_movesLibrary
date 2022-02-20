import React from "react";
import MoveContextProvider from "./utils/contexts/MoveContext";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterMove from "./pages/enterMove";

//style

const App = () => {
  return (
    <MoveContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/EnterMove" element={<EnterMove />} />
        </Routes>
      </BrowserRouter>
    </MoveContextProvider>
  );
};

export default App;
