import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

export default function InsightEvolution() {
  const [activeWeek, setActiveWeek] = useState(4);

  const evolutionStages = [
    {
      week: 1,
      range: "Week 1 (Aug 15 – 21)",
      phase: "Initial Observation",
      badge: "Forming Hypothesis",
      confidence: 62,
      summary: "First detection of co-occurring evening screens and delayed mornings.",
      narrative:
        "Reflectra detected that whenever total evening phone screen time passed 90 minutes, your next-day check-in was 68% more likely to select the 'Low Energy' or 'Groggy' badge. The pattern was broad and non-specific.",
      dataPoints: ["6 observations logged", "Initial r = 0.54", "General screen categories"],
      keyFinding: "Broad association between late device use and sluggish mornings.",
    },
    {
      week: 2,
      range: "Week 2 (Aug 22 – 28)",
      phase: "Signal Differentiation",
      badge: "Signal Sharpened",
      confidence: 78,
      summary: "Short-form video specifically isolated as the primary driver.",
      narrative:
        "By categorizing app types, the engine noticed that reading an e-book or listening to podcasts before sleep had almost no correlation with sleep onset latency. Rapid short-form video feeds, however, showed a 2.4x stronger association with delayed sleep than passive media.",
      dataPoints: ["14 observations logged", "r = 0.74 (short-form)", "Active vs passive content split"],
      keyFinding: "Algorithmic vertical feeds had 2.4x greater association with sleep latency than static reading.",
    },
    {
      week: 3,
      range: "Week 3 (Aug 29 – Sep 04)",
      phase: "User Micro-Experiment",
      badge: "Experiment Tested",
      confidence: 89,
      summary: "You ran a 3-day '10:30 PM Device Sunset' experiment.",
      narrative:
        "You voluntarily initiated a 3-day micro-experiment, moving phone charging across the room at 10:30 PM. Over those 3 nights, your recorded sleep onset latency decreased by an average of 34 minutes, and morning energy check-ins improved from 2.9 to 4.1 / 5.",
      dataPoints: ["3-day active trial", "34m earlier sleep onset", "+1.2 morning energy gain"],
      keyFinding: "The trial demonstrated a clear personal correlation during the deliberate routine shift.",
    },
    {
      week: 4,
      range: "Week 4 (Sep 05 – 11)",
      phase: "Stabilizing New Baseline",
      badge: "Pattern Matured",
      confidence: 94,
      summary: "A sustainable routine emerged and established a healthier baseline.",
      narrative:
        "Rather than rigid perfection, your routine found a flexible balance. You settled into a 45-minute evening screen budget with reading replacing vertical video. Your 60-day baseline shifted, and your self-reported vitality stabilized at 3.9/5 without forced restrictions.",
      dataPoints: ["28 continuous tracking days", "45m evening budget", "New personal baseline stabilized"],
      keyFinding: "The insight graduated from an anomaly into an integrated part of your self-awareness.",
    },
  ];

  const currentStage = evolutionStages.find((s) => s.week === activeWeek) || evolutionStages[3];

  return (
    <article className="evolution-card" id="insight-evolution">
      <div className="card-section-header">
        <div className="card-title-group">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                background: "var(--teal-primary)",
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 9px",
                borderRadius: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Signature Feature
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>Living AI Synthesis</span>
          </div>
          <h2 style={{ marginTop: 6 }}>
            <Sparkles size={20} color="#176653" />
            Insight Evolution: Evening Screens & Morning Vitality
          </h2>
          <p>
            Insights in Reflectra are not static scores. Watch how this understanding developed from an initial hunch into a mature, personalized habit.
          </p>
        </div>
      </div>

      {/* Week Stepper Tabs */}
      <div className="evolution-stepper">
        {evolutionStages.map((stage) => (
          <button
            key={stage.week}
            type="button"
            className={`evolution-tab-btn ${activeWeek === stage.week ? "active" : ""}`}
            onClick={() => setActiveWeek(stage.week)}
          >
            <span className="evolution-tab-week">Week {stage.week}</span>
            <span className="evolution-tab-label">{stage.phase}</span>
          </button>
        ))}
      </div>

      {/* Stage Detail Panel */}
      <div className="evolution-detail-panel">
        <div className="evolution-stage-header">
          <div className="stage-title-wrap">
            <h3 className="stage-title">{currentStage.range}</h3>
            <span className="card-badge badge-teal">{currentStage.badge}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Engine Confidence:</span>
            <div style={{ width: 100, height: 7, background: "#EAE8E1", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${currentStage.confidence}%`, background: "var(--teal-primary)" }} />
            </div>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--teal-primary)" }}>
              {currentStage.confidence}%
            </span>
          </div>
        </div>

        <p className="evolution-narrative">{currentStage.narrative}</p>

        {/* Highlight Quote */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--stone-border)",
            borderRadius: "8px",
            padding: "12px 16px",
            borderLeft: "3px solid var(--teal-primary)",
            fontSize: "13px",
            color: "var(--text-main)",
          }}
        >
          <strong>Key Discovery:</strong> {currentStage.keyFinding}
        </div>

        {/* Metrics Pill Row */}
        <div className="evolution-metrics-pill-row">
          {currentStage.dataPoints.map((dp, idx) => (
            <span key={idx} className="tag-bubble" style={{ background: "#F1F0EC", color: "#1C2622" }}>
              <Check size={11} color="#176653" style={{ marginRight: 4 }} />
              {dp}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
