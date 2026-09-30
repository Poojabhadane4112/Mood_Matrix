import { useState } from "react";
import { Calendar, ChevronDown, Lock, Sparkles } from "lucide-react";

function RelationshipsHeader({ onExploreTimeline }) {
  const [timeRange, setTimeRange] = useState("Last 7 Days");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ranges = ["Last 7 Days", "Last 14 Days", "Last 30 Days", "Semester Baseline"];

  return (
    <header className="rel-header">
      <div className="rel-header-top">
        <div className="rel-title-group">
          <h1>Relationships</h1>
          <p className="rel-subtitle">
            Explore how different parts of your routine appear together over time.
          </p>
        </div>

        <div className="rel-header-actions">
          <div style={{ position: "relative" }}>
            <button
              type="button"
              className="rel-select-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Calendar size={15} color="var(--green, #268c70)" />
              <span>{timeRange}</span>
              <ChevronDown size={14} />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  marginTop: "6px",
                  background: "#ffffff",
                  border: "1px solid #dce5e1",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  zIndex: 20,
                  minWidth: "160px",
                  padding: "6px",
                }}
              >
                {ranges.map((r) => (
                  <button
                    key={r}
                    type="button"
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      fontSize: "12.5px",
                      background: r === timeRange ? "#eaf4ee" : "transparent",
                      color: r === timeRange ? "var(--green-dark)" : "var(--text)",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: r === timeRange ? "600" : "400",
                    }}
                    onClick={() => {
                      setTimeRange(r);
                      setDropdownOpen(false);
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="rel-action-primary"
            onClick={onExploreTimeline}
          >
            <Sparkles size={15} />
            <span>Explore Timeline</span>
          </button>
        </div>
      </div>

      <div className="rel-notices-row">
        <div className="rel-privacy-badge">
          <Lock size={14} />
          <span>Your data is used to create your personal patterns.</span>
        </div>
        <p className="rel-disclaimer-note">
          These relationships describe patterns observed in your personal data. They do not prove that one factor causes another.
        </p>
      </div>
    </header>
  );
}

export default RelationshipsHeader;
