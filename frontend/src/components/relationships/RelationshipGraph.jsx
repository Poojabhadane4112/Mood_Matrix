import { useState } from "react";

// Node definitions distributed in a harmonious circle
const NODES = [
  { id: "sleep", label: "Sleep", x: 260, y: 70, color: "#5594d7" },
  { id: "energy", label: "Energy", x: 420, y: 110, color: "#e89456" },
  { id: "focus", label: "Focus", x: 470, y: 240, color: "#8165be" },
  { id: "study", label: "Study", x: 420, y: 370, color: "#268c70" },
  { id: "workload", label: "Academic Workload", x: 290, y: 440, color: "#c05c2a" },
  { id: "video", label: "Short-form Video", x: 150, y: 410, color: "#e65c61" },
  { id: "screentime", label: "Screen Time", x: 60, y: 300, color: "#d97706" },
  { id: "exercise", label: "Exercise", x: 70, y: 170, color: "#16a34a" },
  { id: "social", label: "Social Activity", x: 170, y: 80, color: "#0d9488" },
  { id: "journal", label: "Journal Themes", x: 270, y: 260, color: "#176653" },
];

const EDGES = [
  { from: "sleep", to: "energy", strength: 11, label: "Sleep ↔ Energy", desc: "Observed together on 11 of the last 14 days." },
  { from: "sleep", to: "focus", strength: 10, label: "Sleep ↔ Focus", desc: "Observed together on 10 of the last 14 days." },
  { from: "screentime", to: "sleep", strength: 9, label: "Screen Time ↔ Sleep", desc: "Observed together on 9 of the last 14 days." },
  { from: "video", to: "focus", strength: 8, label: "Short-form Video ↔ Focus", desc: "Observed together on 8 of the last 14 days." },
  { from: "workload", to: "sleep", strength: 8, label: "Academic Workload ↔ Sleep", desc: "Observed together on 8 of the last 14 days." },
  { from: "study", to: "focus", strength: 11, label: "Study ↔ Focus", desc: "Observed together on 11 of the last 14 days." },
  { from: "exercise", to: "energy", strength: 7, label: "Exercise ↔ Energy", desc: "Observed together on 7 of the last 14 days." },
  { from: "social", to: "journal", strength: 8, label: "Social Activity ↔ Emotional Tone", desc: "Observed together on 8 of the last 14 days." },
];

function RelationshipGraph({ activePair = "Sleep ↔ Energy", onSelectPair }) {
  const [hoveredEdge, setHoveredEdge] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const getNode = (id) => NODES.find((n) => n.id === id);

  return (
    <div className="rel-graph-container">
      <svg
        className="rel-graph-svg"
        viewBox="0 0 540 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#268c70" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#268c70" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections / Edges */}
        {EDGES.map((edge) => {
          const src = getNode(edge.from);
          const tgt = getNode(edge.to);
          if (!src || !tgt) return null;

          const isSelected = activePair.toLowerCase().includes(src.id) && activePair.toLowerCase().includes(tgt.id);
          const isHovered = hoveredEdge === edge.label;
          const strokeWidth = (edge.strength / 14) * 4.5 + 1.2;

          return (
            <g
              key={`${edge.from}-${edge.to}`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredEdge(edge.label)}
              onMouseLeave={() => setHoveredEdge(null)}
              onClick={() => onSelectPair && onSelectPair(edge.label)}
            >
              {/* Invisible thicker stroke for easy hover target */}
              <line
                x1={src.x}
                y1={src.y}
                x2={tgt.x}
                y2={tgt.y}
                stroke="transparent"
                strokeWidth={16}
              />
              <line
                x1={src.x}
                y1={src.y}
                x2={tgt.x}
                y2={tgt.y}
                stroke={
                  isSelected
                    ? "var(--green-dark, #176653)"
                    : isHovered
                    ? "#268c70"
                    : "#b3cec3"
                }
                strokeWidth={isSelected ? strokeWidth + 2 : strokeWidth}
                strokeDasharray={isSelected ? "none" : edge.strength < 8 ? "4 3" : "none"}
                strokeOpacity={isSelected ? 1 : isHovered ? 0.9 : 0.65}
                strokeLinecap="round"
                style={{ transition: "stroke 0.2s ease, stroke-width 0.2s ease" }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const isNodeActive = activePair.toLowerCase().includes(node.id);
          const isNodeHovered = hoveredNode === node.id;

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => {
                const found = EDGES.find((e) => e.from === node.id || e.to === node.id);
                if (found && onSelectPair) {
                  onSelectPair(found.label);
                }
              }}
            >
              {isNodeActive && (
                <circle r={28} fill="url(#nodeGlow)" />
              )}
              <circle
                r={isNodeActive || isNodeHovered ? 16 : 13}
                fill={node.color}
                stroke="#ffffff"
                strokeWidth={2.5}
                style={{
                  transition: "all 0.2s ease",
                  filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.12))",
                }}
              />
              <text
                y={isNodeActive || isNodeHovered ? 26 : 24}
                textAnchor="middle"
                fontSize={isNodeActive ? 11.5 : 10.5}
                fontWeight={isNodeActive ? "700" : "600"}
                fill="var(--text, #183b4a)"
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Info Tooltip */}
      <div className="graph-tooltip-box">
        <span>
          💡 <strong>{hoveredEdge || activePair}</strong>:{" "}
          {EDGES.find((e) => e.label === (hoveredEdge || activePair))?.desc ||
            "Observed together on 11 of the last 14 days."}
        </span>
        <small style={{ color: "#a5c9bc" }}>Tap to inspect</small>
      </div>
    </div>
  );
}

export default RelationshipGraph;
