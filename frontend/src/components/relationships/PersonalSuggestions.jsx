import { useState } from "react";
import { Check, Moon, Sparkles, Target } from "lucide-react";

const SUGGESTIONS = [
  {
    id: "wind-down",
    icon: Moon,
    title: "Earlier Wind-down",
    observation: "Your evening screen activity is above your usual range and your sleep timing has shifted later.",
    suggestion: "Try moving your final entertainment session 30 minutes earlier for the next three days.",
    actionLabel: "Try This",
    color: "#5594d7",
  },
  {
    id: "focus-block",
    icon: Target,
    title: "Focus Block",
    observation: "Your study sessions have had more interruptions than usual.",
    suggestion: "Try one uninterrupted 30-minute focus session tomorrow.",
    actionLabel: "Start Experiment",
    color: "#268c70",
  },
  {
    id: "observe-first",
    icon: Sparkles,
    title: "Observe Before Changing",
    observation: "Your entertainment time increased while study time decreased this week.",
    suggestion: "Track this relationship for another week before deciding whether you want to change your schedule.",
    actionLabel: "Track Pattern",
    color: "#8165be",
  },
];

function PersonalSuggestions() {
  const [activeExperiments, setActiveExperiments] = useState([]);

  const toggleExperiment = (id) => {
    setActiveExperiments((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="rel-card">
      <h2 className="rel-card-title">Suggestions Based on Your Patterns</h2>
      <p className="rel-card-subtitle">
        Small experiments you can try based on recent observations. All suggestions are optional invitations to self-experiment.
      </p>

      <div className="suggestions-grid">
        {SUGGESTIONS.map((item) => {
          const Icon = item.icon;
          const isStarted = activeExperiments.includes(item.id);

          return (
            <div key={item.id} className="suggestion-card">
              <div>
                <div className="suggestion-header-row">
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "#f0f7f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3>{item.title}</h3>
                </div>

                <div className="suggestion-observation" style={{ marginTop: "14px" }}>
                  <strong>Observed:</strong> {item.observation}
                </div>

                <p className="suggestion-text" style={{ marginTop: "14px" }}>
                  {item.suggestion}
                </p>
              </div>

              <button
                type="button"
                className={isStarted ? "rel-select-btn" : "rel-action-primary"}
                onClick={() => toggleExperiment(item.id)}
                style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
              >
                {isStarted ? (
                  <>
                    <Check size={14} color="var(--green, #268c70)" />
                    <span>Experiment Active</span>
                  </>
                ) : (
                  <span>{item.actionLabel}</span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PersonalSuggestions;
