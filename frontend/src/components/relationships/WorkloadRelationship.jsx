import { ArrowRight, ArrowUpRight, GitCommit } from "lucide-react";

const WORKLOAD_CHAIN = [
  { step: "Higher workload", detail: "Exams & Project Deadlines" },
  { step: "More late-evening work", detail: "+1h 24m after 8 PM" },
  { step: "Later sleep timing", detail: "Shifted to 12:18 AM" },
  { step: "Shorter sleep", detail: "-42m below baseline" },
  { step: "Lower next-day energy", detail: "Avg 2.7 / 5 vitality" },
];

function WorkloadRelationship({ onExploreWorkload }) {
  return (
    <section className="rel-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
        <div>
          <h2 className="rel-card-title">Workload & Routine</h2>
          <p className="rel-card-subtitle" style={{ margin: 0 }}>
            Understanding chronological sequences during high-academic periods.
          </p>
        </div>

        <button
          type="button"
          className="rel-select-btn"
          onClick={onExploreWorkload}
        >
          <span>Explore Workload</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "700", color: "#176653", background: "#e5f3ed", padding: "3px 10px", borderRadius: "14px", marginBottom: "12px" }}>
        <GitCommit size={13} />
        <span>OBSERVED SEQUENCE (NOT CAUSE AND EFFECT)</span>
      </div>

      {/* Observed Sequence Visual Chain */}
      <div className="workload-sequence-bar">
        {WORKLOAD_CHAIN.map((item, idx) => (
          <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: "150px" }}>
            <div className="workload-step-box">
              <span style={{ fontSize: "10px", fontWeight: "700", color: "var(--green)", textTransform: "uppercase" }}>
                Step 0{idx + 1}
              </span>
              <strong>{item.step}</strong>
              <span>{item.detail}</span>
            </div>
            {idx < WORKLOAD_CHAIN.length - 1 && (
              <ArrowRight size={16} color="#9cb5ab" style={{ flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#f9fcfb",
          borderLeft: "3px solid var(--green, #268c70)",
          padding: "12px 16px",
          borderRadius: "0 10px 10px 0",
          fontSize: "13px",
          color: "var(--text, #183b4a)",
          lineHeight: "1.55",
        }}
      >
        During periods with higher workload, your recent data also shows more late-evening work and shorter sleep.
      </div>
    </section>
  );
}

export default WorkloadRelationship;
