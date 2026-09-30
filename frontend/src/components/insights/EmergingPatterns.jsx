import { useState } from "react";
import { Check, Eye, EyeOff, Radio } from "lucide-react";

export default function EmergingPatterns({ onToast }) {
  const [watching, setWatching] = useState({
    podcast: false,
    hydration: true,
  });

  const [dismissed, setDismissed] = useState({});

  const toggleWatch = (id) => {
    const nextState = !watching[id];
    setWatching((prev) => ({ ...prev, [id]: nextState }));
    if (onToast) {
      onToast(
        nextState
          ? "Reflectra will monitor this emerging signal for 7 more days."
          : "Unpinned from active watch list."
      );
    }
  };

  const handleDismiss = (id) => {
    setDismissed((prev) => ({ ...prev, [id]: true }));
    if (onToast) {
      onToast("Observation dismissed. Reflectra won't highlight this unless it recurs significantly.");
    }
  };

  const patterns = [
    {
      id: "podcast",
      title: "Audio Podcasts During Transit & Evening Calm",
      desc: "Listening to conversational podcasts during your 5:30 PM bus commute appeared alongside calmer mood tags in 3 of the last 4 occurrences.",
      occurrences: "Observed 3 times this week",
      stage: "Early Hypothesis",
    },
    {
      id: "hydration",
      title: "Early Morning Hydration & Afternoon Focus",
      desc: "Logging water intake before 9:00 AM co-occurred with fewer reports of afternoon mental lethargy (observed twice this week).",
      occurrences: "Observed 2 times",
      stage: "Forming Signal",
    },
  ];

  return (
    <div className="insight-card" id="emerging">
      <div className="card-section-header">
        <div className="card-title-group">
          <h3>
            <Radio size={18} color="#7C5EB8" />
            Emerging Patterns
          </h3>
          <p>Early signals with 2–3 recent observations. Decide which ones to track.</p>
        </div>
        <span className="card-badge badge-lavender">Early Signals</span>
      </div>

      <div className="micro-pattern-list">
        {patterns.map((p) => {
          if (dismissed[p.id]) return null;
          const isWatching = watching[p.id];

          return (
            <div key={p.id} className="micro-pattern-item">
              <div className="micro-item-top">
                <h4>{p.title}</h4>
                <span className="tag-bubble" style={{ background: "#F2EEFA", color: "#7C5EB8" }}>
                  {p.stage}
                </span>
              </div>

              <p className="micro-item-desc">{p.desc}</p>

              <div className="micro-item-footer">
                <span style={{ fontSize: "11px", color: "var(--text-light)" }}>{p.occurrences}</span>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button
                    type="button"
                    onClick={() => handleDismiss(p.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-light)",
                      fontSize: "11.5px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <EyeOff size={12} />
                    Dismiss
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWatch(p.id)}
                    className={isWatching ? "button-primary-teal" : "button-ghost-teal"}
                    style={{ padding: "4px 10px", fontSize: "11.5px" }}
                  >
                    {isWatching ? <Check size={12} /> : <Eye size={12} />}
                    {isWatching ? "Watching" : "Keep Watching"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
