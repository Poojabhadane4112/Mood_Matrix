import { CheckCircle2, HeartHandshake, Sparkles, Trophy } from "lucide-react";

export default function PositivePatterns() {
  const positiveList = [
    {
      id: "sunday-planning",
      icon: Trophy,
      title: "Sunday Evening Weekly Anchoring",
      desc: "Spending 10 minutes reviewing your upcoming calendar on Sunday evening appeared alongside 24% fewer frantic check-in tags on Monday morning.",
      metric: "Observed across 3 of 4 weeks",
    },
    {
      id: "movement-anchor",
      icon: Sparkles,
      title: "Consistent Lunch Walk Habit",
      desc: "You completed 5 out of 7 planned midday outdoor resets this week, coinciding with your highest recorded afternoon clarity scores.",
      metric: "+35% afternoon focus duration",
    },
    {
      id: "rapid-self-correction",
      icon: HeartHandshake,
      title: "High Routine Resilience",
      desc: "Following Wednesday's project sprint, your bedtime shifted back toward your 11:15 PM baseline within 36 hours without lingering disruption.",
      metric: "Returned within 5% of baseline",
    },
  ];

  return (
    <div className="insight-card" id="positive">
      <div className="card-section-header">
        <div className="card-title-group">
          <h3>
            <CheckCircle2 size={18} color="#176653" />
            Positive Patterns & Strengths
          </h3>
          <p>Highlighting constructive routines, natural resets, and stabilizing rhythms.</p>
        </div>
        <span className="card-badge badge-teal">Strengths</span>
      </div>

      <div className="micro-pattern-list">
        {positiveList.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="micro-pattern-item" style={{ background: "#F6FAF8" }}>
              <div className="micro-item-top">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={16} color="#176653" />
                  <h4>{item.title}</h4>
                </div>
                <span className="tag-bubble" style={{ background: "#E8F4F0", color: "#176653" }}>
                  {item.metric}
                </span>
              </div>

              <p className="micro-item-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
