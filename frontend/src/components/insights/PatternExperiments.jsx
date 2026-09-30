import { useState } from "react";
import { CheckCircle2, Clock, FlaskConical, Play } from "lucide-react";

export default function PatternExperiments({ onToast }) {
  const [activeExp, setActiveExp] = useState(null);

  const experiments = [
    {
      id: "screen-sunset",
      title: "15-Minute Screen Sunset",
      desc: "Set device down in another room 15 minutes prior to sleep for 3 consecutive evenings.",
      targetSignal: "Sleep Latency & Morning Vitality",
      duration: "3 Days",
    },
    {
      id: "midday-sunlight",
      title: "Midday Sunlight Reset",
      desc: "Step outside for a 15-minute walk between 12:00 PM and 2:00 PM before starting afternoon study.",
      targetSignal: "Afternoon Focus Continuity",
      duration: "3 Days",
    },
    {
      id: "single-tab-block",
      title: "Single-Task Study Block",
      desc: "Work for 40 minutes on one priority subject with only 1 browser tab active.",
      targetSignal: "Context Switching Latency",
      duration: "3 Days",
    },
  ];

  const handleStartExperiment = (exp) => {
    if (activeExp === exp.id) {
      setActiveExp(null);
      if (onToast) onToast(`Paused ${exp.title} trial.`);
    } else {
      setActiveExp(exp.id);
      if (onToast) onToast(`Started 3-day trial: ${exp.title}. Reflectra will record observational shifts.`);
    }
  };

  return (
    <div className="insight-card" id="experiments">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <FlaskConical size={19} color="#176653" />
            Pattern Micro-Experiments
          </h2>
          <p>
            You are always in control. Test lightweight, 3-day observational trials to discover what feels right for you.
          </p>
        </div>
        <span className="card-badge badge-lavender">Optional 3-Day Trials</span>
      </div>

      <div className="experiments-grid">
        {experiments.map((exp) => {
          const isActive = activeExp === exp.id;

          return (
            <div key={exp.id} className={`experiment-card ${isActive ? "active-exp" : ""}`}>
              <div>
                <div className="exp-badge-row">
                  <span className="exp-target">{exp.targetSignal}</span>
                  <span style={{ fontSize: "11px", color: "var(--text-light)", display: "flex", alignItems: "center", gap: 3 }}>
                    <Clock size={11} /> {exp.duration}
                  </span>
                </div>

                <h3 className="exp-title" style={{ marginTop: 10 }}>{exp.title}</h3>
                <p className="exp-desc" style={{ marginTop: 6 }}>{exp.desc}</p>
              </div>

              <div style={{ paddingTop: 8 }}>
                <button
                  type="button"
                  className={isActive ? "button-ghost-teal" : "button-primary-teal"}
                  onClick={() => handleStartExperiment(exp)}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {isActive ? (
                    <>
                      <CheckCircle2 size={14} />
                      Active (Day 1 of 3) • Tap to Pause
                    </>
                  ) : (
                    <>
                      <Play size={14} />
                      Start 3-Day Trial
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
