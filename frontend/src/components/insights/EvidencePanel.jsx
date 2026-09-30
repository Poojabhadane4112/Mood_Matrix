import { Database, FileText, Layers, ShieldCheck, Smartphone } from "lucide-react";

export default function EvidencePanel() {
  const signalBoxes = [
    {
      icon: Database,
      label: "DATA WINDOW",
      value: "28 Days",
      detail: "Sep 2 – Sep 29, 2026 (Continuous voluntary tracking)",
    },
    {
      icon: Layers,
      label: "BASELINE ANCHOR",
      value: "60-Day Rolling",
      detail: "Compared solely against your own historical normal",
    },
    {
      icon: Smartphone,
      label: "DEVICE LOGS",
      value: "28 Days Synced",
      detail: "Screen sessions, focus timers, and app categories",
    },
    {
      icon: FileText,
      label: "JOURNAL REFLECTIONS",
      value: "19 Entries Logged",
      detail: "Linguistic themes, tone changes, and check-in ratings",
    },
  ];

  return (
    <section className="evidence-card" id="evidence">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <Database size={19} color="#176653" />
            Evidence & Signal Integrity
          </h2>
          <p>
            Complete transparency into the voluntarily provided data points powering Reflectra's pattern calculations
          </p>
        </div>
        <span className="card-badge badge-teal">Transparent Processing</span>
      </div>

      <div className="evidence-grid">
        {signalBoxes.map((box, idx) => {
          const Icon = box.icon;
          return (
            <div key={idx} className="evidence-box">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="evidence-box-label">{box.label}</span>
                <Icon size={15} color="#176653" />
              </div>
              <span className="evidence-box-val">{box.value}</span>
              <span className="evidence-box-detail">{box.detail}</span>
            </div>
          );
        })}
      </div>

      <div className="strength-meter-wrap">
        <div className="strength-info">
          <ShieldCheck size={20} color="#176653" />
          <div>
            <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#1C2622" }}>
              Composite Pattern Confidence: 92% (High Reliability)
            </div>
            <div style={{ fontSize: "12px", color: "#5B6661" }}>
              Based on recurring cross-correlations across 4 independent voluntary signal streams.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="meter-track">
            <div className="meter-bar" style={{ width: "92%" }} />
          </div>
          <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#176653" }}>
            Strong
          </span>
        </div>
      </div>
    </section>
  );
}
