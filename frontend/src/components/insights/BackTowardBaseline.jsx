import { CheckCircle2, RotateCcw } from "lucide-react";

export default function BackTowardBaseline() {
  const returnMetrics = [
    {
      label: "Sleep Timing & Onset",
      recoveryPercent: 94,
      current: "11:25 PM",
      baseline: "11:15 PM normal",
      comment: "Within 10 minutes of your 60-day baseline bedtime.",
    },
    {
      label: "Evening Screen Time",
      recoveryPercent: 91,
      current: "1h 28m",
      baseline: "1h 20m normal",
      comment: "Down from peak 2h 45m during mid-week sprint.",
    },
    {
      label: "Focus Block Continuity",
      recoveryPercent: 88,
      current: "52 min",
      baseline: "58 min normal",
      comment: "Unbroken study sessions have nearly rebounded.",
    },
  ];

  return (
    <div className="insight-card" id="back-toward-baseline">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <RotateCcw size={19} color="#176653" />
            Back Toward Baseline
          </h2>
          <p>
            Observing natural routine recovery: how your signals self-regulate back to equilibrium after intense weeks
          </p>
        </div>
        <span className="card-badge badge-teal">Routine Resilience</span>
      </div>

      <div className="baseline-return-grid">
        {returnMetrics.map((item, idx) => (
          <div key={idx} className="baseline-return-item">
            <div className="return-metric-header">
              <span style={{ color: "var(--text-main)" }}>{item.label}</span>
              <span style={{ color: "var(--teal-primary)", fontWeight: 700 }}>
                {item.recoveryPercent}% Recovered
              </span>
            </div>

            <div className="return-progress-track">
              <div
                className="return-progress-fill"
                style={{ width: `${item.recoveryPercent}%` }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "var(--text-light)" }}>
              <span>Current: {item.current}</span>
              <span>{item.baseline}</span>
            </div>

            <p className="return-commentary">{item.comment}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 18,
          background: "#F3F7F5",
          border: "1px solid rgba(23, 102, 83, 0.18)",
          borderRadius: "var(--radius-md)",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: "13px",
          color: "#176653",
        }}
      >
        <CheckCircle2 size={16} color="#176653" style={{ flexShrink: 0 }} />
        <span>
          <strong>The Self-Correction Principle:</strong> You don't need strict rigidity to have a healthy routine. Life expands for deadlines and contracts for rest. Reflectra simply mirrors your return journey.
        </span>
      </div>
    </div>
  );
}
