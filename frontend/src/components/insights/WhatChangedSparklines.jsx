import { Activity, ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

function MiniSparkline({ data, color = "#176653", baseline = 50 }) {
  // data is an array of 7 numerical values
  const min = Math.min(...data, baseline) * 0.85;
  const max = Math.max(...data, baseline) * 1.15;
  const range = max - min || 1;
  const width = 160;
  const height = 44;

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * (width - 8) + 4;
      const y = height - ((val - min) / range) * (height - 10) - 5;
      return `${x},${y}`;
    })
    .join(" ");

  const baselineY = height - ((baseline - min) / range) * (height - 10) - 5;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      {/* Baseline reference dashed line */}
      <line
        x1="2"
        y1={baselineY}
        x2={width - 2}
        y2={baselineY}
        stroke="#D1CEBF"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      {/* Sparkline curve */}
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {/* End point dot */}
      {data.length > 0 && (
        <circle
          cx={(width - 8) + 4}
          cy={height - ((data[data.length - 1] - min) / range) * (height - 10) - 5}
          r="3.5"
          fill={color}
        />
      )}
    </svg>
  );
}

export default function WhatChangedSparklines() {
  const metrics = [
    {
      id: "sleep",
      label: "Sleep Duration",
      current: "6.4 hrs",
      baselineVal: "7.2 hrs baseline",
      delta: "-0.8 hrs",
      deltaType: "lower",
      sparkData: [7.3, 7.1, 6.8, 6.2, 5.8, 6.5, 6.4],
      baselineNum: 7.2,
      color: "#326DA8",
      desc: "Drifted lower during mid-week deadline sprint",
    },
    {
      id: "screen",
      label: "Evening Screen Time",
      current: "2h 15m",
      baselineVal: "1h 20m baseline",
      delta: "+55m higher",
      deltaType: "higher",
      sparkData: [1.3, 1.4, 2.1, 2.6, 2.8, 2.4, 2.25],
      baselineNum: 1.33,
      color: "#C0711C",
      desc: "Concentrated between 10:15 PM and 11:45 PM",
    },
    {
      id: "focus",
      label: "Unbroken Focus Block",
      current: "42 min",
      baselineVal: "58 min baseline",
      delta: "-16 min",
      deltaType: "lower",
      sparkData: [60, 56, 45, 38, 35, 40, 42],
      baselineNum: 58,
      color: "#7C5EB8",
      desc: "Higher browser tab switches during project research",
    },
    {
      id: "energy",
      label: "Reported Morning Energy",
      current: "3.2 / 5",
      baselineVal: "3.9 / 5 baseline",
      delta: "-0.7 pts",
      deltaType: "lower",
      sparkData: [4.0, 3.8, 3.4, 2.8, 2.9, 3.3, 3.2],
      baselineNum: 3.9,
      color: "#2C7A68",
      desc: "Closely mirrored sleep duration over past 5 days",
    },
    {
      id: "steps",
      label: "Daily Movement",
      current: "8,150",
      baselineVal: "6,400 steps",
      delta: "+27% above",
      deltaType: "balanced",
      sparkData: [6200, 6800, 7500, 8400, 9100, 8000, 8150],
      baselineNum: 6400,
      color: "#176653",
      desc: "Midday walks increased during clear weather days",
    },
  ];

  return (
    <div className="insight-card" id="what-changed">
      <div className="card-section-header">
        <div className="card-title-group">
          <h2>
            <Activity size={19} color="#176653" />
            What Changed?
          </h2>
          <p>
            Comparing your last 7 days against your personal 60-day baseline. Dashed line denotes your baseline reference.
          </p>
        </div>
        <span className="card-badge badge-teal">Self-Referential Baseline</span>
      </div>

      <div className="sparklines-grid">
        {metrics.map((m) => (
          <div key={m.id} className="sparkline-card">
            <div className="sparkline-header">
              <span className="sparkline-label">{m.label}</span>
              <span
                className={`delta-pill ${
                  m.deltaType === "higher"
                    ? "delta-higher"
                    : m.deltaType === "lower"
                    ? "delta-lower"
                    : "delta-balanced"
                }`}
              >
                {m.deltaType === "higher" && <ArrowUpRight size={12} />}
                {m.deltaType === "lower" && <ArrowDownRight size={12} />}
                {m.deltaType === "balanced" && <Minus size={12} />}
                {m.delta}
              </span>
            </div>

            <div className="sparkline-values">
              <span className="val-current">{m.current}</span>
              <span className="val-baseline">vs {m.baselineVal}</span>
            </div>

            <div className="sparkline-chart-wrap">
              <MiniSparkline data={m.sparkData} color={m.color} baseline={m.baselineNum} />
            </div>

            <p className="sparkline-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
