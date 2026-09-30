import { SlidersHorizontal, UserCheck } from "lucide-react";

const BASELINE_METRICS = [
  { label: "Typical Sleep", value: "7h 52m" },
  { label: "Typical Study", value: "3h 05m" },
  { label: "Typical Short-form Video", value: "41m" },
  { label: "Typical Evening Screen", value: "1h 05m" },
  { label: "Typical Focus Session", value: "31m" },
];

function PersonalBaseline({ onAdjustBaseline }) {
  return (
    <section className="rel-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <UserCheck size={18} color="var(--green, #268c70)" />
            <h2 className="rel-card-title" style={{ margin: 0 }}>
              Your Personal Baseline
            </h2>
          </div>
          <p className="rel-card-subtitle" style={{ margin: "4px 0 0 0" }}>
            Calculated dynamically across your 30-day voluntary logs.
          </p>
        </div>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onAdjustBaseline}
        >
          <SlidersHorizontal size={14} color="var(--green, #268c70)" />
          <span>Adjust Baseline</span>
        </button>
      </div>

      <div className="baseline-grid">
        {BASELINE_METRICS.map((item) => (
          <div key={item.label} className="baseline-metric-item">
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <p style={{ margin: 0, fontSize: "13px", color: "#4f6874", lineHeight: "1.5" }}>
        🌿 <strong>Self-Referential Principle:</strong> Reflectra compares your recent behavior with your own history rather than with other people.
      </p>
    </section>
  );
}

export default PersonalBaseline;
