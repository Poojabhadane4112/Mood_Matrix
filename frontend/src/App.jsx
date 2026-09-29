import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import CheckIn from "./components/checkin/CheckIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/check-in" element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;