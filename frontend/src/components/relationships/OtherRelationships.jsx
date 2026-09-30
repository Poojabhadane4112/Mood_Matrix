import { Activity, ArrowRight, BookOpen, Film, Users } from "lucide-react";

const OTHER_CARDS = [
  {
    icon: Activity,
    title: "Exercise ↔ Energy",
    desc: "Higher activity days have appeared alongside higher energy ratings.",
    color: "#38a169",
    tag: "Activity Pulse",
  },
  {
    icon: Users,
    title: "Social Activity ↔ Emotional Tone",
    desc: "More social activity has appeared alongside more positive journal language.",
    color: "#0d9488",
    tag: "Social Connection",
  },
  {
    icon: BookOpen,
    title: "Study ↔ Focus",
    desc: "Longer focused study sessions have appeared alongside higher focus ratings.",
    color: "#268c70",
    tag: "Deep Work",
  },
  {
    icon: Film,
    title: "Entertainment ↔ Time Balance",
    desc: "Entertainment time increased compared with your personal baseline this week.",
    color: "#8165be",
    tag: "Leisure Balance",
  },
];

function OtherRelationships({ onSelectPair }) {
  return (
    <section className="rel-card">
      <h2 className="rel-card-title">Other Observed Relationships</h2>
      <p className="rel-card-subtitle">
        Broader lifestyle patterns emerging from your logged check-ins and reflections.
      </p>

      <div className="other-rel-grid">
        {OTHER_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="other-rel-card">
              <div>
                <div className="other-rel-header">
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "#f0f7f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: card.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <strong>{card.title}</strong>
                </div>

                <p className="other-rel-desc" style={{ marginTop: "12px" }}>
                  {card.desc}
                </p>
              </div>

              <button
                type="button"
                className="rel-select-btn"
                style={{ width: "fit-content", padding: "6px 12px" }}
                onClick={() => onSelectPair && onSelectPair(card.title)}
              >
                <span>Explore</span>
                <ArrowRight size={13} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OtherRelationships;
