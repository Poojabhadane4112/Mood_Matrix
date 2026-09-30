import { useState } from "react";
import { Sliders, ThumbsDown, ThumbsUp } from "lucide-react";

export default function InsightFeedbackSection({ onToast }) {
  const [sensitivity, setSensitivity] = useState("balanced");
  const [pollAnswer, setPollAnswer] = useState(null);

  const handleSensitivity = (val) => {
    setSensitivity(val);
    if (onToast) onToast(`Pattern detection threshold updated to: ${val}.`);
  };

  const handlePoll = (ans) => {
    setPollAnswer(ans);
    if (onToast) {
      onToast(
        ans === "useful"
          ? "Thank you! Reflectra continues to learn your self-referential rhythm."
          : "Understood. Pattern sensitivity has been relaxed."
      );
    }
  };

  return (
    <section className="feedback-summary-card" id="feedback">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <Sliders size={17} color="#176653" />
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--text-main)" }}>
            Tune Your Insights & Provide Feedback
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
          You remain in full control of how sensitive and proactive Reflectra's pattern engine behaves.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        {/* Sensitivity Pills */}
        <div style={{ display: "flex", background: "#EAE7DF", padding: "3px", borderRadius: "10px", gap: "3px" }}>
          {[
            { id: "subtle", label: "Notice Subtle" },
            { id: "balanced", label: "Balanced" },
            { id: "strong-only", label: "Strong Only" },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => handleSensitivity(mode.id)}
              style={{
                border: "none",
                background: sensitivity === mode.id ? "#FFFFFF" : "transparent",
                color: sensitivity === mode.id ? "var(--teal-primary)" : "var(--text-muted)",
                fontWeight: sensitivity === mode.id ? 700 : 500,
                fontSize: "12px",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: sensitivity === mode.id ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Feedback Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            className={`button-ghost-teal ${pollAnswer === "useful" ? "active-useful" : ""}`}
            onClick={() => handlePoll("useful")}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            <ThumbsUp size={13} />
            {pollAnswer === "useful" ? "Felt Resonant" : "Mostly Resonant"}
          </button>

          <button
            type="button"
            className="feedback-btn"
            onClick={() => handlePoll("not-relevant")}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            <ThumbsDown size={13} />
            {pollAnswer === "not-relevant" ? "Adjusted" : "Needs Tuning"}
          </button>
        </div>
      </div>
    </section>
  );
}
