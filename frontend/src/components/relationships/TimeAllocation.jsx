import { ArrowDown, ArrowUp, Clock } from "lucide-react";

const TIME_ITEMS = [
  { name: "Sleep", duration: "7h 10m", minutes: 430, color: "#5594d7" },
  { name: "College / Work", duration: "6h 00m", minutes: 360, color: "#176653" },
  { name: "Study", duration: "2h 30m", minutes: 150, color: "#268c70" },
  { name: "Entertainment", duration: "1h 50m", minutes: 110, color: "#8165be" },
  { name: "Projects", duration: "1h 45m", minutes: 105, color: "#4f7a70" },
  { name: "Other", duration: "1h 25m", minutes: 85, color: "#8ba49d" },
  { name: "Social", duration: "1h 10m", minutes: 70, color: "#e89456" },
  { name: "Short-form Video", duration: "1h 05m", minutes: 65, color: "#e65c61" },
  { name: "Travel", duration: "1h", minutes: 60, color: "#9ca3af" },
  { name: "Exercise", duration: "35m", minutes: 35, color: "#38a169" },
];

const BASELINE_DELTAS = [
  { category: "Sleep", change: "-42m", isIncrease: false },
  { category: "Study", change: "-35m", isIncrease: false },
  { category: "Entertainment", change: "+32m", isIncrease: true },
  { category: "Short-form video", change: "+24m", isIncrease: true },
];

const MAX_MINUTES = 450;

function TimeAllocation() {
  return (
    <section className="rel-card">
      <h2 className="rel-card-title">Where Your Time Goes</h2>
      <p className="rel-card-subtitle">Your average daily time allocation.</p>

      <div className="time-grid-layout">
        {/* Horizontal Bars */}
        <div className="time-bars-list">
          {TIME_ITEMS.map((item) => {
            const pct = Math.min(100, Math.round((item.minutes / MAX_MINUTES) * 100));
            return (
              <div key={item.name} className="time-bar-item">
                <span className="time-bar-category">{item.name}</span>
                <div className="time-bar-track">
                  <div
                    className="time-bar-fill"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span className="time-bar-value">{item.duration}</span>
              </div>
            );
          })}
        </div>

        {/* Compared with baseline */}
        <aside className="time-baseline-panel">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Clock size={16} color="var(--green-dark, #176653)" />
              <h3 className="time-baseline-title" style={{ margin: 0 }}>
                Compared with your baseline
              </h3>
            </div>

            <div className="time-delta-list">
              {BASELINE_DELTAS.map((delta) => (
                <div key={delta.category} className="time-delta-item">
                  <span style={{ fontWeight: 500, color: "var(--text, #183b4a)" }}>
                    {delta.category}
                  </span>
                  <span
                    className={`delta-pill ${
                      delta.isIncrease ? "higher" : "lower"
                    }`}
                  >
                    {delta.isIncrease ? (
                      <ArrowUp size={12} />
                    ) : (
                      <ArrowDown size={12} />
                    )}
                    {delta.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "14px",
              borderTop: "1px solid #e1eee8",
              fontSize: "12px",
              color: "var(--text-soft, #66808a)",
              lineHeight: "1.5",
            }}
          >
            Reflectra compares daily hours to your 30-day personal baseline rather than static external quotas.
          </div>
        </aside>
      </div>
    </section>
  );
}

export default TimeAllocation;
