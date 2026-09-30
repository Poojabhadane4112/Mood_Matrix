import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUp, Smartphone } from "lucide-react";

const SCREEN_BREAKDOWN = [
  { name: "Social Media", value: 80, timeStr: "1h 20m", color: "#268c70" },
  { name: "Short-form Video", value: 65, timeStr: "1h 05m", color: "#e65c61" },
  { name: "Messaging", value: 55, timeStr: "55m", color: "#8165be" },
  { name: "Education", value: 45, timeStr: "45m", color: "#5594d7" },
  { name: "Productivity", value: 40, timeStr: "40m", color: "#176653" },
  { name: "Entertainment", value: 32, timeStr: "32m", color: "#e89456" },
  { name: "Other", value: 20, timeStr: "20m", color: "#9ca3af" },
];

function ScreenTimeAnalysis() {
  return (
    <section className="rel-card">
      <h2 className="rel-card-title">Screen Time & Routine</h2>
      <p className="rel-card-subtitle">
        How device usage connects with evening wind-down and daily rest.
      </p>

      <div className="screen-time-grid">
        {/* Donut Chart and Breakdown */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--text-soft)", textTransform: "uppercase" }}>
              Total Screen-Related Activity
            </span>
            <strong style={{ fontSize: "16px", color: "var(--green-dark)" }}>
              5h 37m / day
            </strong>
          </div>

          <div style={{ width: "100%", height: 210, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SCREEN_BREAKDOWN}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {SCREEN_BREAKDOWN.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val, name, item) => [
                    `${item.payload.timeStr} (${val}m)`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <Smartphone size={20} color="var(--green, #268c70)" style={{ margin: "0 auto" }} />
              <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--text)" }}>5h 37m</div>
            </div>
          </div>

          <div className="screen-breakdown-legend">
            {SCREEN_BREAKDOWN.map((item) => (
              <div key={item.name} className="legend-row">
                <div className="legend-row-left">
                  <span className="legend-dot" style={{ backgroundColor: item.color }} />
                  <span style={{ color: "var(--text, #183b4a)" }}>{item.name}</span>
                </div>
                <span style={{ fontWeight: "600", color: "var(--text-soft, #66808a)" }}>
                  {item.timeStr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Beside Card: Late-Evening Drift & Observation */}
        <div className="screen-observation-card">
          <div style={{ borderBottom: "1px solid #e5ede8", paddingBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--green-dark)", textTransform: "uppercase" }}>
              LATE-EVENING WINDOW (AFTER 10:30 PM)
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "8px" }}>
              <div>
                <strong style={{ fontSize: "24px", color: "var(--text)" }}>1h 42m</strong>
                <div style={{ fontSize: "12px", color: "var(--text-soft)" }}>Recent Average</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="delta-pill higher">
                  <ArrowUp size={12} /> +37m
                </span>
                <div style={{ fontSize: "12px", color: "var(--text-soft)", marginTop: "4px" }}>
                  Baseline: 1h 05m
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbe6e1",
              borderRadius: "10px",
              padding: "14px 16px",
              fontSize: "13.5px",
              color: "var(--text)",
              lineHeight: "1.6",
            }}
          >
            <strong>Observation:</strong> Your late-evening screen activity has increased during the same period that your sleep timing shifted later.
          </div>

          <p style={{ margin: 0, fontSize: "11.5px", color: "#66808a", lineHeight: "1.45" }}>
            * This describes co-occurring pattern trends and does not state that screen time was the direct single cause of sleep changes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScreenTimeAnalysis;
