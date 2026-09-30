import { useState } from "react";
import { Brain, Sparkles } from "lucide-react";

export default function AiInsightsSection({ onToast }) {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [sensitivity, setSensitivity] = useState("balanced");
  const [nlpAnalysis, setNlpAnalysis] = useState(true);
  const [insightAlerts, setInsightAlerts] = useState(true);

  const handleSensitivity = (mode) => {
    setSensitivity(mode);
    if (onToast) onToast(`Pattern detection sensitivity adjusted to ${mode}.`);
  };

  return (
    <article className="setting-card" id="ai-insights">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Brain size={20} color="var(--settings-teal)" />
            AI & Pattern Intelligence
          </h2>
          <p>Govern how Reflectra discovers correlations, processes reflections, and presents insights</p>
        </div>
      </div>

      {/* Master Toggle */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Enable AI Pattern Synthesis</span>
          <p className="setting-row-desc">
            When enabled, Reflectra automatically identifies co-occurring habits, routine drift, and emerging lifestyle rhythms.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={aiEnabled}
            onChange={(e) => {
              setAiEnabled(e.target.checked);
              if (onToast) onToast(`AI Pattern Synthesis ${e.target.checked ? "enabled" : "paused"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Pattern Detection Sensitivity */}
      <div className="setting-row" style={{ alignItems: "flex-start", flexDirection: "column" }}>
        <div className="setting-row-info">
          <span className="setting-row-title">Pattern Detection Sensitivity</span>
          <p className="setting-row-desc">
            Controls the statistical confidence threshold required before a relationship appears in Insights or Relationships.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
          {[
            { id: "subtle", label: "Notice Subtle (2+ occurrences)", desc: "Higher sensitivity, early hypotheses" },
            { id: "balanced", label: "Balanced (Recommended)", desc: "Requires 4+ observations & r > 0.60" },
            { id: "strong-only", label: "Strong Signals Only", desc: "Rigorous consistency (r > 0.80)" },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => handleSensitivity(item.id)}
              style={{
                border: sensitivity === item.id ? "2px solid var(--settings-teal)" : "1px solid var(--settings-border)",
                background: sensitivity === item.id ? "var(--settings-teal-subtle)" : "#FCFCFA",
                borderRadius: "12px",
                padding: "12px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                flex: 1,
                minWidth: "170px",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "13px", color: "var(--settings-text-main)" }}>{item.label}</strong>
              </div>
              <span style={{ fontSize: "11.5px", color: "var(--settings-text-muted)" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Journal NLP Analysis */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Journal Semantic & Vocabulary Mirror</span>
          <p className="setting-row-desc">
            Analyze recurring reflection themes (e.g. "Deadlines", "Relief", "Rest") without external language models.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={nlpAnalysis}
            onChange={(e) => {
              setNlpAnalysis(e.target.checked);
              if (onToast) onToast(`Journal linguistic mirroring ${e.target.checked ? "enabled" : "disabled"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Insight Notifications */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Proactive Insight Notifications</span>
          <p className="setting-row-desc">
            Surface newly validated patterns on your dashboard feed as soon as statistical significance is reached.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={insightAlerts}
            onChange={(e) => {
              setInsightAlerts(e.target.checked);
              if (onToast) onToast(`Insight notifications ${e.target.checked ? "enabled" : "muted"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Non-Causal Pledge Banner */}
      <div
        style={{
          background: "#F8FAF9",
          border: "1px solid rgba(23, 102, 83, 0.16)",
          borderRadius: "12px",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: "12.5px",
          color: "var(--settings-text-muted)",
          lineHeight: 1.45,
        }}
      >
        <Sparkles size={16} color="var(--settings-teal)" style={{ flexShrink: 0 }} />
        <span>
          <strong>Ethical AI Architecture:</strong> Reflectra strictly rejects prescriptive scoring, judgment tags, and clinical diagnosis. Our pattern engine answers only: <em>“What has frequently appeared together in your own voluntary data?”</em>
        </span>
      </div>
    </article>
  );
}
