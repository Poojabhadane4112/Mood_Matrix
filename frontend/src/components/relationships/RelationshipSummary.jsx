import { ArrowUpRight, CheckCircle2, Moon, Smartphone, Zap } from "lucide-react";

function RelationshipSummary({
  onExploreSleep,
  onExploreScreenTime,
  onExploreWorkload,
}) {
  return (
    <section className="rel-card" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7faf8 100%)", border: "1.5px solid #d5e8de" }}>
      <h2 className="rel-card-title">Your Recent Relationship Summary</h2>
      <p className="rel-card-subtitle">
        Key synthesized observations across your last 7 days.
      </p>

      <div className="summary-insights-list">
        <div className="summary-insight-item">
          <CheckCircle2 size={16} color="var(--green, #268c70)" style={{ flexShrink: 0 }} />
          <span>Your sleep timing has shifted later this week.</span>
        </div>

        <div className="summary-insight-item">
          <CheckCircle2 size={16} color="var(--green, #268c70)" style={{ flexShrink: 0 }} />
          <span>Late-evening screen activity is above your personal baseline.</span>
        </div>

        <div className="summary-insight-item">
          <CheckCircle2 size={16} color="var(--green, #268c70)" style={{ flexShrink: 0 }} />
          <span>Higher workload has appeared alongside later work sessions and shorter sleep.</span>
        </div>
      </div>

      <div className="summary-actions-row">
        <button
          type="button"
          className="rel-select-btn"
          onClick={onExploreSleep}
        >
          <Moon size={14} color="#5594d7" />
          <span>Explore Sleep</span>
          <ArrowUpRight size={13} />
        </button>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onExploreScreenTime}
        >
          <Smartphone size={14} color="#d97706" />
          <span>Explore Screen Time</span>
          <ArrowUpRight size={13} />
        </button>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onExploreWorkload}
        >
          <Zap size={14} color="#176653" />
          <span>Explore Workload</span>
          <ArrowUpRight size={13} />
        </button>
      </div>
    </section>
  );
}

export default RelationshipSummary;
