import { useState } from "react";
import {
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  Compass,
  FileQuestion,
  Moon,
  Sparkles,
  Sun,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

export default function MeaningfulInsightCards({ onExplorePattern, onToast }) {
  const [expandedWhy, setExpandedWhy] = useState({});
  const [feedbackState, setFeedbackState] = useState({});

  const insightsList = [
    {
      id: "screen-sleep-latency",
      title: "Late-Evening Screen Continuity & Sleep Latency",
      subtitle:
        "Screen sessions exceeding 45 minutes after 10:30 PM appeared alongside a 36-minute increase in sleep onset latency over the past 8 days.",
      icon: Moon,
      tags: ["Sleep Timing", "Screen Habits", "Evening Routine"],
      evidenceStrength: "Strong Association (Observed 7 of 8 days)",
      whyData: {
        signals: [
          { name: "Device Usage Log", value: "Screen active after 10:30 PM (avg 58m)" },
          { name: "Sleep Tracker Onset", value: "Bedtime 11:45 PM vs 11:05 PM baseline" },
          { name: "Morning Check-In", value: "Tiredness tag logged 6 of 7 mornings" },
        ],
        frequency: "Observed in 87% of eligible evenings",
        correlation: "Association strength r = 0.76",
        note:
          "Reflectra detected that whenever phone/tablet usage persisted past 10:30 PM, your voluntary sleep onset logs recorded a longer wind-down period. This highlights co-occurrence in your routine, not physiological causation.",
      },
    },
    {
      id: "outdoor-walk-focus",
      title: "Midday Fresh-Air Breaks & Afternoon Focus Blocks",
      subtitle:
        "Taking an outdoor walk of 15+ minutes before 2:00 PM appeared alongside 28% longer uninterrupted study sessions in 6 of your last 7 recorded days.",
      icon: Sun,
      tags: ["Focus Continuity", "Movement", "Afternoon Rhythm"],
      evidenceStrength: "High Consistency (Observed 6 instances)",
      whyData: {
        signals: [
          { name: "Step Counter Log", value: "1,800+ steps logged between 12-2 PM" },
          { name: "Focus Session Timer", value: "Avg 54m uninterrupted vs 42m baseline" },
          { name: "Self-Reported Tag", value: "'Clear-headed' selected in 3 PM check-in" },
        ],
        frequency: "Observed in 85% of days with midday walks",
        correlation: "Association strength r = 0.68",
        note:
          "Days with movement outside during lunch breaks co-occurred with fewer browser tab switches and longer focus spans during 2:00–5:00 PM work blocks.",
      },
    },
    {
      id: "workload-journal-tone",
      title: "Academic Sprints & Reflection Tone Compression",
      subtitle:
        "High-workload academic days coincided with 40% shorter journal entries, characterized by tactical bullet points rather than emotional exploration.",
      icon: Brain,
      tags: ["Journaling", "Workload", "Self-Expression"],
      evidenceStrength: "Moderate Association (5 observations)",
      whyData: {
        signals: [
          { name: "Coursework Calendar", value: "Exam prep & assignment deadlines" },
          { name: "Journal Word Count", value: "112 words avg vs 285 baseline" },
          { name: "Linguistic Sentiment", value: "Shifted from reflective to task-oriented" },
        ],
        frequency: "Observed during peak deadline periods",
        correlation: "Association strength r = 0.62",
        note:
          "When coursework volume escalates, your reflection pattern naturally adapts into quick pragmatic check-ins, returning to introspective prose once deadlines pass.",
      },
    },
  ];

  const toggleWhy = (id) => {
    setExpandedWhy((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFeedback = (id, type) => {
    setFeedbackState((prev) => ({ ...prev, [id]: type }));
    if (onToast) {
      onToast(
        type === "useful"
          ? "Thank you! Reflectra will highlight similar patterns."
          : "Noted. Reflectra will adjust pattern sensitivity."
      );
    }
  };

  return (
    <section className="meaningful-insights-section">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <Sparkles size={19} color="#176653" />
            Meaningful Insights
          </h2>
          <p>
            AI-synthesized relationships between your habits, daily routines, and voluntary reflections
          </p>
        </div>
        <span className="card-badge badge-lavender">Personal Patterns</span>
      </div>

      <div className="meaningful-insights-list">
        {insightsList.map((item) => {
          const Icon = item.icon;
          const isWhyOpen = !!expandedWhy[item.id];
          const feedback = feedbackState[item.id];

          return (
            <article key={item.id} className="meaningful-card">
              <div className="meaningful-top">
                <div className="meaningful-title-area">
                  <div className="insight-avatar-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="meaningful-heading">{item.title}</h3>
                    <p className="meaningful-sub">{item.subtitle}</p>
                  </div>
                </div>

                <div className="meaningful-meta-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="tag-bubble">
                      {t}
                    </span>
                  ))}
                  <span className="tag-bubble" style={{ background: "#E8F4F0", color: "#176653", fontWeight: 700 }}>
                    {item.evidenceStrength}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="meaningful-actions">
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="button-primary-teal"
                    onClick={() => onExplorePattern && onExplorePattern(item.id)}
                  >
                    <Compass size={14} />
                    Explore Pattern
                  </button>

                  <button
                    type="button"
                    className="button-ghost-teal"
                    onClick={() => toggleWhy(item.id)}
                  >
                    <FileQuestion size={14} />
                    {isWhyOpen ? "Hide Explanation" : "Why am I seeing this?"}
                    {isWhyOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {/* Insight Feedback */}
                <div className="feedback-row">
                  <span>Helpful pattern?</span>
                  <button
                    type="button"
                    className={`feedback-btn ${feedback === "useful" ? "active-useful" : ""}`}
                    onClick={() => handleFeedback(item.id, "useful")}
                    title="Useful observation"
                  >
                    <ThumbsUp size={12} />
                    {feedback === "useful" ? "Useful" : ""}
                  </button>
                  <button
                    type="button"
                    className={`feedback-btn ${feedback === "not-relevant" ? "active-not" : ""}`}
                    onClick={() => handleFeedback(item.id, "not-relevant")}
                    title="Not relevant to me"
                  >
                    <ThumbsDown size={12} />
                    {feedback === "not-relevant" ? "Dismissed" : ""}
                  </button>
                </div>
              </div>

              {/* "Why am I seeing this?" Expandable Drawer */}
              {isWhyOpen && (
                <div className="why-drawer">
                  <h4>
                    <Check size={15} />
                    Signals That Generated This Pattern
                  </h4>
                  <p>{item.whyData.note}</p>

                  <div className="why-signals-grid">
                    {item.whyData.signals.map((sig, sidx) => (
                      <div key={sidx} className="why-signal-item">
                        <strong>{sig.name}</strong>
                        <span>{sig.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#8E9993", marginTop: 4 }}>
                    <span>{item.whyData.frequency}</span>
                    <span>{item.whyData.correlation} • Non-causal observation</span>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
