import { useState } from "react";
import { Eye, HelpCircle } from "lucide-react";

export default function HiddenPatternMissed({ onReflect }) {
  const [selectedDay, setSelectedDay] = useState("Thu");

  const daysOfWeek = [
    { day: "Mon", energy: 3.9, fillH: "78%", note: "Steady morning rhythm (7.1h sleep)" },
    { day: "Tue", energy: 3.8, fillH: "76%", note: "Post-lunch walk maintained focus" },
    { day: "Wed", energy: 3.6, fillH: "72%", note: "Slept 7.4h; balanced workday" },
    { day: "Thu", energy: 2.2, fillH: "44%", isDip: true, note: "Energy dipped to 2.2/5 despite good sleep; 3h lab block" },
    { day: "Fri", energy: 3.4, fillH: "68%", note: "Afternoon recovery heading into weekend" },
    { day: "Sat", energy: 4.1, fillH: "82%", note: "Open schedule; rest & personal hobbies" },
    { day: "Sun", energy: 4.0, fillH: "80%", note: "Evening planning reset for new week" },
  ];

  const currentDayInfo = daysOfWeek.find((d) => d.day === selectedDay) || daysOfWeek[3];

  return (
    <article className="missed-pattern-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <span className="missed-badge">
          <Eye size={14} />
          Something You Might Have Missed
        </span>
        <span style={{ fontSize: "12px", color: "var(--text-light)" }}>Subtle Weekly Regularity</span>
      </div>

      <div className="missed-content-grid">
        <div className="missed-story">
          <h3 className="missed-headline">The Recurring "Thursday Afternoon Dip"</h3>
          <p className="missed-text">
            While sleep duration typically predicts your morning vitality, your Thursday afternoon check-in consistently recorded lower perceived energy (<strong>2.2 / 5</strong>) over 4 consecutive weeks—<strong>even on weeks when Wednesday night sleep was above your baseline</strong>.
          </p>

          <p className="missed-text">
            This pattern co-occurred alongside your back-to-back 3-hour chemistry lab schedule and irregular lunch timing on Thursdays.
          </p>

          <div className="missed-reflection-bubble">
            "Could the cognitive demand of back-to-back lab blocks be creating an unacknowledged mental fatigue curve that sleep alone doesn't prevent?"
          </div>

          <div style={{ marginTop: 6 }}>
            <button
              type="button"
              className="button-ghost-teal"
              onClick={() => onReflect && onReflect("The Thursday Cognitive Dip")}
            >
              <HelpCircle size={14} />
              Reflect on This Hidden Rhythm
            </button>
          </div>
        </div>

        {/* Interactive Day of Week Heat Strip */}
        <div className="dow-timeline">
          <div className="dow-timeline-title">
            Weekly Energy Trajectory (Click to inspect)
          </div>

          <div className="dow-strip">
            {daysOfWeek.map((d) => (
              <div
                key={d.day}
                className="dow-col"
                onClick={() => setSelectedDay(d.day)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`dow-bar ${d.isDip ? "dip-highlight" : ""}`}
                  style={{
                    border: selectedDay === d.day ? "2px solid #176653" : undefined,
                  }}
                >
                  <div
                    className="dow-fill"
                    style={{ height: d.fillH }}
                    title={`${d.day}: ${d.energy}/5`}
                  />
                </div>
                <span className="dow-name">{d.day}</span>
              </div>
            ))}
          </div>

          {/* Selected Day Details */}
          <div
            style={{
              background: "#F8F7F3",
              borderRadius: "8px",
              padding: "10px 12px",
              fontSize: "12px",
              lineHeight: 1.4,
            }}
          >
            <strong style={{ color: "#1C2622" }}>{selectedDay} Profile ({currentDayInfo.energy}/5):</strong>{" "}
            <span style={{ color: "#5B6661" }}>{currentDayInfo.note}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
