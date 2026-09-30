import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { ArrowUpRight, Info, Sparkles } from "lucide-react";

// Historical data points: sleep (hours), energy (1-5 rating), day
const SCATTER_DATA = [
  { sleep: 5.8, energy: 2.5, day: "Mon" },
  { sleep: 6.2, energy: 3.0, day: "Tue" },
  { sleep: 6.0, energy: 2.8, day: "Wed" },
  { sleep: 7.2, energy: 3.8, day: "Thu" },
  { sleep: 7.5, energy: 4.2, day: "Fri" },
  { sleep: 8.1, energy: 4.5, day: "Sat" },
  { sleep: 7.8, energy: 4.0, day: "Sun" },
  { sleep: 6.5, energy: 3.2, day: "Prev Mon" },
  { sleep: 5.5, energy: 2.2, day: "Prev Tue" },
  { sleep: 7.0, energy: 3.6, day: "Prev Wed" },
  { sleep: 8.3, energy: 4.7, day: "Prev Thu" },
  { sleep: 7.6, energy: 4.1, day: "Prev Fri" },
  { sleep: 6.8, energy: 3.4, day: "Prev Sat" },
  { sleep: 7.4, energy: 3.9, day: "Prev Sun" },
];

function RelationshipDetail({ pair = "Sleep ↔ Energy", onExplorePattern }) {
  const isSleepEnergy = pair.toLowerCase().includes("sleep") && pair.toLowerCase().includes("energy");

  return (
    <div className="detail-panel">
      <div>
        <div className="detail-panel-tag">
          <Sparkles size={12} />
          <span>PRIMARY OBSERVED PAIR</span>
        </div>
        <h3 className="rel-card-title" style={{ fontSize: "20px", marginTop: "8px" }}>
          {isSleepEnergy ? "Sleep & Energy" : pair}
        </h3>
        <p style={{ margin: "3px 0 0", fontSize: "13px", color: "var(--text-soft, #66808a)" }}>
          Observed together: <strong>11 of the last 14 days</strong>
        </p>
      </div>

      {/* Scatter Plot */}
      <div style={{ width: "100%", height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 15, left: -15 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8f0ec" />
            <XAxis
              type="number"
              dataKey="sleep"
              name="Sleep Duration"
              unit="h"
              domain={[5, 9]}
              tick={{ fontSize: 11, fill: "#66808a" }}
              label={{ value: "Sleep (hrs)", position: "insideBottom", offset: -8, fontSize: 11, fill: "#66808a" }}
            />
            <YAxis
              type="number"
              dataKey="energy"
              name="Energy Rating"
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tick={{ fontSize: 11, fill: "#66808a" }}
              label={{ value: "Energy (/5)", angle: -90, position: "insideLeft", offset: 18, fontSize: 11, fill: "#66808a" }}
            />
            <ZAxis range={[50, 70]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "8px 12px",
                        border: "1px solid #dce8e2",
                        borderRadius: "8px",
                        fontSize: "12px",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
                      }}
                    >
                      <strong>{data.day}</strong>
                      <div>Sleep: {data.sleep} hrs</div>
                      <div>Energy: {data.energy} / 5</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter
              name="Days"
              data={SCATTER_DATA}
              fill="var(--green, #268c70)"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="detail-observation-box">
        Your recent data shows that longer sleep has generally appeared alongside higher energy ratings.
      </div>

      {/* Baseline vs Recent Comparison */}
      <div className="detail-metrics-row">
        <div className="detail-metric-card">
          <small>Personal Baseline</small>
          <strong>7h 52m sleep</strong>
          <span>Energy 4.1 / 5</span>
        </div>

        <div className="detail-metric-card">
          <small>Recent Average</small>
          <strong>7h 10m sleep</strong>
          <span>Energy 3.4 / 5</span>
        </div>
      </div>

      {/* Association != Causation disclaimer */}
      <div className="detail-disclaimer">
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "700", marginBottom: "3px" }}>
          <Info size={13} />
          <span>Association ≠ causation</span>
        </div>
        This pattern describes what has appeared together in your data. It does not establish that one factor caused the other.
      </div>

      <button
        type="button"
        className="rel-action-primary"
        onClick={onExplorePattern}
        style={{ width: "100%", justifyContent: "center" }}
      >
        <span>Explore This Pattern</span>
        <ArrowUpRight size={15} />
      </button>
    </div>
  );
}

export default RelationshipDetail;
