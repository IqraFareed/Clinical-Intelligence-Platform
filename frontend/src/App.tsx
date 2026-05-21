import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashoboard";
import Patients from "./pages/Patient";
import Visits from "./pages/Visits";
import Analytics from "./pages/Analytics";
const App = () => {
  return (
    <BrowserRouter>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
