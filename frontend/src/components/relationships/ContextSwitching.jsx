import { ArrowRight, Play, Shuffle } from "lucide-react";

const SEQUENCE_STEPS = [
  { label: "Study", type: "study" },
  { label: "Messaging", type: "messaging" },
  { label: "Study", type: "study" },
  { label: "Short-form Video", type: "video" },
  { label: "Study", type: "study" },
  { label: "Browser", type: "browser" },
  { label: "Study", type: "study" },
];

function ContextSwitching({ onTryFocusSession }) {
  return (
    <section className="rel-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <h2 className="rel-card-title">Focus & Context Switching</h2>
          <p className="rel-card-subtitle">
            How interruptions and app switching appear within your study blocks.
          </p>
        </div>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onTryFocusSession}
        >
          <Play size={14} color="var(--green, #268c70)" fill="var(--green, #268c70)" />
          <span>Try a Focus Session</span>
        </button>
      </div>

      {/* Visual Sequence Flow */}
      <div>
        <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-soft)", textTransform: "uppercase", marginBottom: "8px" }}>
          Reconstructed Activity Stream (Wednesday Afternoon Block)
        </div>
        <div className="flow-sequence-container">
          {SEQUENCE_STEPS.map((step, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className={`flow-step-pill ${step.type}`}>{step.label}</span>
              {idx < SEQUENCE_STEPS.length - 1 && (
                <ArrowRight size={14} className="flow-step-arrow" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="focus-metrics-grid">
        <div className="focus-metric-card">
          <small>Focus Sessions</small>
          <strong>6</strong>
        </div>

        <div className="focus-metric-card">
          <small>Average Session</small>
          <strong>28 min</strong>
        </div>

        <div className="focus-metric-card">
          <small>Longest Session</small>
          <strong>52 min</strong>
        </div>

        <div className="focus-metric-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <small>Activity Switches</small>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#b84c1b" }}>+5</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "3px" }}>
            <strong>14</strong>
            <span style={{ fontSize: "11.5px", color: "var(--text-soft)" }}>Baseline: 9</span>
          </div>
        </div>
      </div>

      {/* Observation Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#f8faf9",
          border: "1px solid #e1ece6",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "13px",
          color: "var(--text)",
        }}
      >
        <Shuffle size={16} color="var(--green, #268c70)" />
        <span>
          <strong>Observation:</strong> Your study sessions contained more activity switches than your usual pattern.
        </span>
      </div>
    </section>
  );
}

export default ContextSwitching;
