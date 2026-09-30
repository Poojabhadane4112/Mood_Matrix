import { ArrowRight, BookOpen, Clock3, Moon, Smartphone } from "lucide-react";

const DRIFT_ITEMS = [
  {
    category: "SLEEP",
    icon: Moon,
    usual: "11:06 PM",
    recent: "12:18 AM",
    change: "+1h 12m",
    description: "Your sleep timing has shifted later recently.",
  },
  {
    category: "SCREEN TIME",
    icon: Smartphone,
    usual: "1h 05m",
    recent: "1h 42m",
    change: "+37m",
    description: "Your late-evening screen activity is above your baseline.",
  },
  {
    category: "STUDY",
    icon: BookOpen,
    usual: "6:18 PM",
    recent: "7:42 PM",
    change: "+1h 24m",
    description: "Your main study sessions have been starting later.",
  },
];

function RoutineDrift({ onViewTimeline }) {
  return (
    <section className="rel-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <h2 className="rel-card-title">Routine Drift</h2>
          <p className="rel-card-subtitle">
            How your current routine differs from your usual pattern.
          </p>
        </div>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onViewTimeline}
        >
          <Clock3 size={15} color="var(--green, #268c70)" />
          <span>View Timeline</span>
          <ArrowRight size={13} />
        </button>
      </div>

      <div className="drift-cards-grid">
        {DRIFT_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.category} className="drift-card">
              <div className="drift-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon size={16} color="var(--green-dark, #176653)" />
                  <span className="drift-category-badge">{item.category}</span>
                </div>
                <span className="drift-shift-badge">{item.change}</span>
              </div>

              <div className="drift-times-row">
                <div className="drift-time-col">
                  <small>Usual</small>
                  <strong>{item.usual}</strong>
                </div>
                <ArrowRight size={14} color="#8fa59e" />
                <div className="drift-time-col">
                  <small>Recent</small>
                  <strong>{item.recent}</strong>
                </div>
              </div>

              <p className="drift-card-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RoutineDrift;
