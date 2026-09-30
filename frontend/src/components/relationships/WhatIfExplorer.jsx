import { useState } from "react";
import { ArrowRight, Sliders, Sparkles } from "lucide-react";

const TARGET_ACTIVITIES = [
  "Sleep",
  "Study",
  "Exercise",
  "Project",
  "Social",
  "Personal time",
];

function WhatIfExplorer({ onExploreSchedule }) {
  const currentVideoMinutes = 65; // 1h 05m
  const [newVideoMinutes, setNewVideoMinutes] = useState(35);
  const [selectedTargets, setSelectedTargets] = useState(["Sleep", "Project"]);

  const recoveredMinutes = Math.max(0, currentVideoMinutes - newVideoMinutes);

  const toggleTarget = (target) => {
    setSelectedTargets((prev) =>
      prev.includes(target)
        ? prev.length > 1
          ? prev.filter((t) => t !== target)
          : prev
        : [...prev, target]
    );
  };

  const perTargetMinutes = selectedTargets.length
    ? Math.floor(recoveredMinutes / selectedTargets.length)
    : 0;

  return (
    <section className="rel-card">
      <div className="what-if-panel">
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "700", color: "#176653", background: "#e5f3ed", padding: "3px 10px", borderRadius: "12px", marginBottom: "8px" }}>
            <Sliders size={13} />
            <span>TIME REALLOCATION SIMULATOR</span>
          </div>
          <h2 className="rel-card-title">What If?</h2>
          <p className="rel-card-subtitle" style={{ margin: 0 }}>
            Explore how changing your time allocation would affect your schedule.
          </p>
        </div>

        {/* Reduction Slider */}
        <div className="what-if-slider-box">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13.5px", fontWeight: "600", color: "var(--text)" }}>
              What if I reduce: <strong>Short-form video</strong>
            </span>
            <span style={{ fontSize: "13px", color: "var(--text-soft)" }}>
              Current: <strong>1h 05m</strong>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "10px" }}>
            <input
              type="range"
              min="0"
              max="65"
              step="5"
              value={newVideoMinutes}
              onChange={(e) => setNewVideoMinutes(Number(e.target.value))}
              className="energy-slider-input"
              style={{ flex: 1 }}
              aria-label="New short-form video target in minutes"
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "var(--green-dark)",
                minWidth: "65px",
                textAlign: "right",
              }}
            >
              {newVideoMinutes}m
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-soft)", marginTop: "4px" }}>
            <span>0m (Fully omitted)</span>
            <span>35m (Target)</span>
            <span>65m (Current baseline)</span>
          </div>
        </div>

        {/* Target Allocation Selection */}
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--text)", display: "block", marginBottom: "8px" }}>
            Reallocate recovered time ({recoveredMinutes} minutes) to:
          </span>
          <div className="what-if-allocation-chips">
            {TARGET_ACTIVITIES.map((act) => {
              const isSelected = selectedTargets.includes(act);
              return (
                <button
                  type="button"
                  key={act}
                  className={`what-if-chip-btn ${isSelected ? "active" : ""}`}
                  onClick={() => toggleTarget(act)}
                >
                  {isSelected ? "✓ " : "+ "}
                  {act}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Result Schedule */}
        <div className="what-if-results-box">
          <div>
            <div style={{ fontSize: "12px", color: "#366857", fontWeight: "600", textTransform: "uppercase" }}>
              Projected Schedule Adjustments
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px", flexWrap: "wrap" }}>
              <strong style={{ fontSize: "16px", color: "var(--green-dark)" }}>
                {recoveredMinutes} minutes recovered
              </strong>
              <ArrowRight size={15} color="#268c70" />
              {selectedTargets.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "#ffffff",
                    padding: "3px 10px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    border: "1px solid #c9e2d4",
                    color: "var(--text)",
                  }}
                >
                  {t} +{perTargetMinutes}m
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="rel-action-primary"
            onClick={onExploreSchedule}
          >
            <Sparkles size={14} />
            <span>Explore Schedule</span>
          </button>
        </div>

        <p style={{ margin: "14px 0 0 0", fontSize: "11.5px", color: "#66808a", lineHeight: "1.4" }}>
          * Reflectra models schedule and time availability only. It does not predict psychological outcomes or stress levels.
        </p>
      </div>
    </section>
  );
}

export default WhatIfExplorer;
