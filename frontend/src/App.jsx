import React from "react";
import { Routes, Route, Navigate } from "react-router";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mainPage" replace />} />

      <Route path="/mainPage" element={<MainPage />} />
    </Routes>
  );
}

export default App;
