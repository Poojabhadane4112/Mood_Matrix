import { History } from "lucide-react";

export default function ExperimentResults() {
  const resultRows = [
    {
      metric: "Sleep Onset Latency",
      before: "46 min avg",
      during: "21 min avg",
      shift: "-25 min faster",
      positive: true,
    },
    {
      metric: "Reported Morning Energy",
      before: "3.0 / 5",
      during: "4.1 / 5",
      shift: "+1.1 points higher",
      positive: true,
    },
    {
      metric: "Short-Form Video (past 10 PM)",
      before: "1h 45m avg",
      during: "20 min avg",
      shift: "-1h 25m reduction",
      positive: true,
    },
  ];

  return (
    <article className="completed-exp-box" id="experiment-results">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <History size={17} color="#176653" />
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--text-main)" }}>
            Completed Experiment Results: 15-Minute Screen Sunset
          </h3>
        </div>
        <span className="card-badge badge-teal">Completed Trial • Sep 14–16</span>
      </div>

      <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
        Here is how your voluntary signals appeared during your recent 3-day screen sunset trial compared to the 7 days directly preceding it.
      </p>

      {/* Results Comparison Grid */}
      <div className="exp-results-table">
        <div style={{ fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", fontSize: "11px" }}>
          SIGNAL METRIC
        </div>
        <div style={{ fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", fontSize: "11px" }}>
          BEFORE TRIAL
        </div>
        <div style={{ fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", fontSize: "11px" }}>
          DURING 3-DAY TRIAL
        </div>
        <div style={{ fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", fontSize: "11px" }}>
          OBSERVED SHIFT
        </div>

        {resultRows.map((row, idx) => (
          <div key={idx} style={{ display: "contents" }}>
            <span style={{ fontWeight: 600, color: "var(--text-main)" }}>{row.metric}</span>
            <span style={{ color: "var(--text-muted)" }}>{row.before}</span>
            <span style={{ color: "var(--teal-primary)", fontWeight: 650 }}>{row.during}</span>
            <span style={{ color: "#176653", fontWeight: 700 }}>{row.shift}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, fontSize: "12.5px" }}>
        <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
          "Felt noticeably calmer getting into bed; read 8 pages of a paperback novel instead." — Your Journal Note
        </span>
        <span className="tag-bubble" style={{ background: "#E8F4F0", color: "#176653" }}>
          Non-prescriptive observation
        </span>
      </div>
    </article>
  );
}
