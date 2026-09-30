import { AlertCircle, CheckCircle2, GitCommit } from "lucide-react";

export default function UnusualPatternDay() {
  const comparisonRows = [
    {
      metric: "Bedtime",
      unusual: "1:45 AM",
      baseline: "11:20 PM",
      difference: "+2h 25m delayed",
      isAlert: true,
    },
    {
      metric: "Sleep Duration",
      unusual: "5.1 hrs",
      baseline: "7.4 hrs",
      difference: "-2.3 hrs",
      isAlert: true,
    },
    {
      metric: "Total Screen Time",
      unusual: "6h 52m",
      baseline: "3h 40m",
      difference: "+3h 12m higher",
      isAlert: true,
    },
    {
      metric: "Focus Switching Frequency",
      unusual: "28 switches / hr",
      baseline: "11 switches / hr",
      difference: "+17 switches / hr",
      isAlert: true,
    },
    {
      metric: "Journal Emotional Tone",
      unusual: "Task-driven, hurried",
      baseline: "Reflective, grounded",
      difference: "Pragmatic mode",
      isAlert: false,
    },
  ];

  return (
    <div className="insight-card" id="unusual-pattern">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <GitCommit size={19} color="#C0711C" />
            Unusual Pattern Deep-Dive
          </h2>
          <p>
            Contrasting a high-drift day against your typical routine profile to observe how disruption begins and resolves
          </p>
        </div>
        <span className="card-badge badge-amber">Single-Day Anomaly</span>
      </div>

      <div className="unusual-comparison-grid">
        {/* Column 1: The Unusual Day */}
        <div className="comparison-column unusual-active">
          <div className="col-header">
            <div>
              <span className="col-title" style={{ color: "#92400E" }}>
                Wednesday, Sept 24
              </span>
              <div style={{ fontSize: "12px", color: "var(--text-light)" }}>
                Project Deadline Sprint
              </div>
            </div>
            <span
              style={{
                background: "#FEF3C7",
                color: "#92400E",
                fontSize: "11px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <AlertCircle size={12} />
              High Drift Day
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="metric-comparison-row">
                <span className="metric-name">{row.metric}</span>
                <span className="metric-val" style={{ color: row.isAlert ? "#92400E" : "#1C2622" }}>
                  {row.unusual}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Personal Baseline */}
        <div className="comparison-column">
          <div className="col-header">
            <div>
              <span className="col-title">Your Typical Wednesday</span>
              <div style={{ fontSize: "12px", color: "var(--text-light)" }}>
                Based on 8 previous Wednesdays
              </div>
            </div>
            <span
              style={{
                background: "#E8F4F0",
                color: "#176653",
                fontSize: "11px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Personal Normal
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="metric-comparison-row">
                <span className="metric-name">{row.metric}</span>
                <span className="metric-val" style={{ color: "var(--teal-primary)" }}>
                  {row.baseline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recovery / Self-Correction Note */}
      <div className="recovery-banner">
        <CheckCircle2 size={18} color="#176653" style={{ flexShrink: 0 }} />
        <div>
          <strong>Natural Resilience Observed:</strong> Rather than initiating a prolonged slump, your data indicates that by Friday evening (within 36 hours), your sleep timing and screen duration had already returned to within 6% of your personal baseline.
        </div>
      </div>
    </div>
  );
}
