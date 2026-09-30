import { BookOpen, Sparkles } from "lucide-react";

export default function JournalThemesComparison() {
  const previousThemes = [
    { tag: "Deadlines", count: 18, type: "stress" },
    { tag: "Midterms", count: 14, type: "stress" },
    { tag: "Mental Fatigue", count: 12, type: "stress" },
    { tag: "Time Pressure", count: 10, type: "stress" },
    { tag: "Caffeine", count: 8, type: "neutral" },
    { tag: "Late Nights", count: 7, type: "stress" },
  ];

  const recentThemes = [
    { tag: "Relief", count: 15, type: "relief" },
    { tag: "Rest & Sleep", count: 13, type: "relief" },
    { tag: "Future Planning", count: 11, type: "relief" },
    { tag: "Dinner with Friends", count: 9, type: "relief" },
    { tag: "Fresh Air Walks", count: 7, type: "relief" },
    { tag: "Reading for Fun", count: 6, type: "relief" },
  ];

  return (
    <div className="insight-card" id="journal-themes">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <BookOpen size={19} color="#176653" />
            Journal Themes Evolution
          </h2>
          <p>
            Tracking shifts in your voluntary journal vocabulary across the previous vs recent 14-day periods
          </p>
        </div>
        <span className="card-badge badge-lavender">NLP Semantic Mirror</span>
      </div>

      <div className="themes-compare-container">
        {/* Previous Period */}
        <div className="theme-epoch-card">
          <div className="epoch-badge">Previous 14 Days (Exam & Sprint Period)</div>
          <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: 0 }}>
            Frequent words centered around urgency, academic deliverables, and time compression:
          </p>
          <div className="theme-tag-cloud">
            {previousThemes.map((item) => (
              <span key={item.tag} className={`theme-chip ${item.type === "stress" ? "chip-stress" : "chip-neutral"}`}>
                {item.tag}
                <span className="theme-count">{item.count}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Recent Period */}
        <div className="theme-epoch-card" style={{ background: "#F7FAF8", borderColor: "rgba(23, 102, 83, 0.2)" }}>
          <div className="epoch-badge" style={{ color: "var(--teal-primary)" }}>
            Recent 14 Days (Recovery & Recalibration)
          </div>
          <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: 0 }}>
            Linguistic shift toward restoration, social connection, and intentional pacing:
          </p>
          <div className="theme-tag-cloud">
            {recentThemes.map((item) => (
              <span key={item.tag} className="theme-chip chip-relief">
                <Sparkles size={11} />
                {item.tag}
                <span className="theme-count">{item.count}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Shift Insight */}
      <div
        style={{
          marginTop: 16,
          background: "#FFFFFF",
          border: "1px solid var(--stone-border)",
          borderRadius: "var(--radius-md)",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: "13px",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ fontWeight: 700, color: "var(--teal-primary)" }}>Key Shift:</span>
        <span>
          Task-urgency terms decreased by <strong>62%</strong>, while restorative and connection themes rose by <strong>84%</strong>. Reflectra reflects what you write, never grading your thoughts.
        </span>
      </div>
    </div>
  );
}
