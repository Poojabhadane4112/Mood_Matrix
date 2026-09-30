import { AlertCircle, ChevronRight, GitFork } from "lucide-react";

export default function PatternStory() {
  const storyNodes = [
    {
      step: "01. Workload Surge",
      title: "Academic Deadlines",
      desc: "Coursework volume peaks during midterm preparation.",
    },
    {
      step: "02. Extended Screentime",
      title: "Evening Digital Drift",
      desc: "Device screen active in bed past 10:30 PM (+55m).",
    },
    {
      step: "03. Delayed Sleep",
      title: "Shifted Sleep Onset",
      desc: "Sleep latency extended by 36 mins beyond baseline.",
    },
    {
      step: "04. Morning Vitality",
      title: "Lower Morning Energy",
      desc: "Check-in energy rating logged at 3.1/5 (down 0.8 pts).",
    },
    {
      step: "05. Afternoon Focus",
      title: "Study Fragmentation",
      desc: "Higher browser switching during early afternoon sessions.",
    },
  ];

  return (
    <div className="insight-card" id="pattern-story">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <GitFork size={19} color="#176653" />
            Pattern Story: The Mid-Week Cascade
          </h2>
          <p>
            Visually mapping how multiple routine signals appeared sequentially across your days
          </p>
        </div>
        <span className="card-badge badge-teal">Temporal Flow</span>
      </div>

      {/* Storyline Flowchart Strip */}
      <div className="storyline-strip">
        {storyNodes.map((node, idx) => (
          <div key={idx} style={{ display: "contents" }}>
            <div className="story-node">
              <span className="story-node-step">{node.step}</span>
              <h4 className="story-node-title">{node.title}</h4>
              <p className="story-node-desc">{node.desc}</p>
            </div>
            {idx < storyNodes.length - 1 && (
              <div className="story-connector">
                <ChevronRight size={18} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prominent Non-Causal Reminder */}
      <div className="disclaimer-banner" style={{ background: "#FBFBFA" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <AlertCircle size={16} color="#C0711C" style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong>Correlation Is Not Causation:</strong> This diagram illustrates a co-occurring chronological pattern in your voluntary data, not an unavoidable domino effect. Personal agency, external life factors, and environment constantly shape these rhythms.
          </span>
        </div>
      </div>
    </div>
  );
}
