import { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";

const TIMELINE_DAYS = [
  { day: "MON", label: "Normal routine", note: "Sleep: 7h 45m · Focus: 3.5h · Energy: 4/5. Steady baseline day with balanced study block." },
  { day: "TUE", label: "Higher workload", note: "Academic deadline announced. Evening library session extended until 9:30 PM." },
  { day: "WED", label: "More evening screen use", note: "Short-form video and messaging recorded at 1h 42m after 10 PM." },
  { day: "THU", label: "Shorter sleep", note: "Sleep recorded at 5h 50m. Next-morning check-in noted lower physical bandwidth." },
  { day: "FRI", label: "More context switching", note: "14 app switches logged during 2 study blocks. Frequent notification breaks." },
  { day: "SAT", label: "Higher social activity", note: "Lunch with friends + evening park walk. Journal sentiment reflected calm and connection." },
  { day: "SUN", label: "Routine moving toward baseline", note: "Earlier wind-down initiated at 10:45 PM. Preparing for the coming week." },
];

function PatternTimeline({ onSelectDay }) {
  const [selectedDay, setSelectedDay] = useState(0);

  const activeDay = TIMELINE_DAYS[selectedDay];

  return (
    <section className="rel-card">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <CalendarDays size={18} color="var(--green, #268c70)" />
        <h2 className="rel-card-title" style={{ margin: 0 }}>
          Recent Day-by-Day Timeline
        </h2>
      </div>
      <p className="rel-card-subtitle">
        Chronological tapestry of the past 7 days. Tap any day to inspect observed signals.
      </p>

      {/* Horizontal Day Buttons */}
      <div className="pattern-timeline-row">
        {TIMELINE_DAYS.map((item, idx) => (
          <button
            key={item.day}
            type="button"
            className={`timeline-day-btn ${selectedDay === idx ? "selected" : ""}`}
            onClick={() => {
              setSelectedDay(idx);
              if (onSelectDay) onSelectDay(item);
            }}
          >
            <span className="timeline-day-name">{item.day}</span>
            <span className="timeline-day-desc">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Day Details Card */}
      <div
        style={{
          marginTop: "16px",
          background: "#f9fcfb",
          border: "1px solid #dbe8e1",
          borderRadius: "12px",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--green-dark)", textTransform: "uppercase" }}>
            {activeDay.day} SUMMARY · {activeDay.label}
          </div>
          <p style={{ margin: "4px 0 0 0", fontSize: "13.5px", color: "var(--text)" }}>
            {activeDay.note}
          </p>
        </div>

        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--green-dark)", fontWeight: "600" }}>
          <span>Detailed Log</span>
          <ChevronRight size={14} />
        </span>
      </div>
    </section>
  );
}

export default PatternTimeline;
