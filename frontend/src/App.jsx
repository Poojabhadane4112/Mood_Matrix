import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import CheckIn from "./components/checkin/CheckIn";
import Changes from "./components/changes/Changes";
import RecurringThemes from "./components/themes/RecurringThemes";

import Journal from "./components/journal/Journal";
import RelationshipsPage from "./components/relationships/RelationshipsPage";
import InsightsPage from "./components/insights/InsightsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Check-in */}
        <Route path="/check-in" element={<CheckIn />} />

        {/* Journal */}
        <Route path="/journal" element={<Journal />} />

        {/* Relationships */}
        <Route path="/relationships" element={<RelationshipsPage />} />

        {/* Insights */}
        <Route path="/insights" element={<InsightsPage />} />

        {/* Pattern pages */}
        <Route path="/changes" element={<Changes />} />
        <Route path="/themes" element={<RecurringThemes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;