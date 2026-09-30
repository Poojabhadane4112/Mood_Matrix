import { useState } from "react";
import { Calendar, ChevronDown, Info, Lock, Sparkles } from "lucide-react";

export default function InsightsHeader({ selectedRange, onSelectRange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ranges = [
    { id: "7d", label: "Past 7 Days" },
    { id: "14d", label: "Past 14 Days (Recommended)" },
    { id: "30d", label: "Past 30 Days" },
    { id: "baseline", label: "All-Time vs Baseline" },
  ];

  const currentLabel = ranges.find((r) => r.id === selectedRange)?.label || "Past 14 Days";

  return (
    <section className="insights-header-section" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="insights-header">
        <div className="insights-header-left">
          <div className="insights-header-tag">
            <Sparkles size={14} />
            <span>AI PATTERN SYNTHESIS</span>
          </div>
          <h1 className="insights-header-title">Insights</h1>
          <p className="insights-header-sub">
            Here’s what Reflectra noticed in your recent patterns—analyzing changes, co-occurring signals, and habit evolution compared with your own baseline.
          </p>
        </div>

        <div className="insights-header-actions">
          {/* Range Selector */}
          <div style={{ position: "relative" }}>
            <button
              type="button"
              className="select-pill"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Calendar size={14} color="#176653" />
              <span>{currentLabel}</span>
              <ChevronDown size={14} color="#8E9993" />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "115%",
                  right: 0,
                  background: "#FFFFFF",
                  border: "1px solid var(--stone-border)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  zIndex: 20,
                  minWidth: "220px",
                  padding: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                {ranges.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      onSelectRange(r.id);
                      setDropdownOpen(false);
                    }}
                    style={{
                      background: selectedRange === r.id ? "#E8F4F0" : "transparent",
                      color: selectedRange === r.id ? "#176653" : "#1C2622",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: selectedRange === r.id ? 650 : 500,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Privacy badge */}
          <div className="header-meta-badge">
            <Lock size={13} color="#176653" />
            <span>Private & On-Device Analysis</span>
          </div>
        </div>
      </div>

      {/* Non-causal Disclaimer Notice */}
      <div className="disclaimer-banner">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Info size={16} color="#176653" style={{ flexShrink: 0 }} />
          <span>
            <strong>Self-Referential Observational Mirror:</strong> Reflectra identifies habits and signals appearing together over time in your voluntary data. Insights describe associations, not medical diagnoses or causal claims.
          </span>
        </div>
        <span style={{ fontSize: "11.5px", color: "#8E9993", whiteSpace: "nowrap" }}>
          Updated today • 28 signals analyzed
        </span>
      </div>
    </section>
  );
}
