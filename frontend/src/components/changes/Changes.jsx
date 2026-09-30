import { useState } from "react";
import { Link } from "react-router-dom";
import "./Changes.css";

function Changes() {
  const [period, setPeriod] = useState("7 days");

  const patterns = [
    {
      icon: "↗",
      title: "Academic work",
      description: "Assignments, projects and study-related topics",
      count: "5 mentions",
      change: "+3",
      type: "up",
    },
    {
      icon: "↘",
      title: "Low energy",
      description: "References to tiredness and lower energy",
      count: "2 mentions",
      change: "-1",
      type: "down",
    },
    {
      icon: "→",
      title: "Social moments",
      description: "Friends and time spent with others",
      count: "3 mentions",
      change: "0",
      type: "same",
    },
    {
      icon: "✦",
      title: "Personal time",
      description: "Time spent relaxing or doing something for yourself",
      count: "2 mentions",
      change: "+2",
      type: "new",
    },
  ];

  const timeline = [
    {
      day: "MON",
      date: "23",
      topic: "Project work",
      detail: "You mentioned working on a project.",
      type: "academic",
    },
    {
      day: "TUE",
      date: "24",
      topic: "Friends",
      detail: "A social moment appeared in your reflection.",
      type: "social",
    },
    {
      day: "WED",
      date: "25",
      topic: "Assignment",
      detail: "Academic work appeared in your check-in.",
      type: "academic",
    },
    {
      day: "THU",
      date: "26",
      topic: "Personal time",
      detail: "You mentioned making some time for yourself.",
      type: "personal",
    },
    {
      day: "FRI",
      date: "27",
      topic: "Study",
      detail: "Study-related activity appeared again.",
      type: "academic",
    },
    {
      day: "SAT",
      date: "28",
      topic: "Friends",
      detail: "Another social moment appeared.",
      type: "social",
    },
  ];

  return (
    <div className="changes-page">
      <div className="changes-container">
        <nav className="insight-navigation" aria-label="Page navigation">
          <Link to="/">← Dashboard</Link>
          <Link to="/themes">Recurring themes →</Link>
        </nav>

        {/* HEADER */}
        <header className="changes-header">
          <div>
            <span className="eyebrow">YOUR PATTERNS</span>

            <h1>What changed?</h1>

            <p>
              Notice what has been different across your recent check-ins.
            </p>
          </div>

          <div className="period-selector">
            <span>Viewing</span>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option>7 days</option>
              <option>14 days</option>
              <option>30 days</option>
            </select>
          </div>
        </header>

        {/* SUMMARY CARDS */}
        <section className="summary-grid">

          <div className="summary-card">
            <div className="summary-top">
              <span>CHECK-INS</span>
              <span className="summary-icon">◌</span>
            </div>

            <strong>6</strong>

            <p>this period</p>

            <div className="summary-change positive">
              ↑ 2 from previous period
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-top">
              <span>REFLECTIONS</span>
              <span className="summary-icon">✎</span>
            </div>

            <strong>4</strong>

            <p>with written reflections</p>

            <div className="summary-change neutral">
              67% of check-ins
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-top">
              <span>RECURRING THEMES</span>
              <span className="summary-icon">◈</span>
            </div>

            <strong>4</strong>

            <p>themes appearing recently</p>

            <div className="summary-change neutral">
              Based on your entries
            </div>
          </div>

          <div className="summary-card highlight-card">
            <div className="summary-top">
              <span>NOTICEABLE SHIFTS</span>
              <span className="summary-icon">✦</span>
            </div>

            <strong>2</strong>

            <p>patterns that stood out</p>

            <div className="summary-change positive">
              Worth reflecting on
            </div>
          </div>

        </section>

        {/* ACTIVITY GRAPH */}
        <section className="activity-section">

          <div className="section-title-row">
            <div>
              <span className="eyebrow">ACTIVITY</span>
              <h2>Your check-in rhythm</h2>
              <p>How often you've checked in recently.</p>
            </div>

            <div className="activity-total">
              <strong>6</strong>
              <span>check-ins</span>
            </div>
          </div>

          <div className="chart-card">

            <div className="chart-y-axis">
              <span>3</span>
              <span>2</span>
              <span>1</span>
              <span>0</span>
            </div>

            <div className="chart-area">

              <div className="chart-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="chart-bars">
                <div className="bar-column">
                  <div className="bar bar-1"></div>
                  <small>MON</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-2"></div>
                  <small>TUE</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-1"></div>
                  <small>WED</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-3"></div>
                  <small>THU</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-2"></div>
                  <small>FRI</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-1"></div>
                  <small>SAT</small>
                </div>

                <div className="bar-column">
                  <div className="bar bar-0"></div>
                  <small>SUN</small>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PATTERNS */}
        <section className="patterns-section">

          <div className="section-heading">
            <span className="eyebrow">RECENT PATTERNS</span>

            <div>
              <h2>Things that stood out</h2>
              <p>
                Observations from your recent reflections.
              </p>
            </div>
          </div>

          <div className="patterns-grid">

            {patterns.map((pattern, index) => (
              <div
                className={`pattern-card pattern-${pattern.type}`}
                key={index}
              >

                <div className="pattern-card-top">
                  <div className="pattern-icon">
                    {pattern.icon}
                  </div>

                  <span className="pattern-change">
                    {pattern.change}
                  </span>
                </div>

                <h3>{pattern.title}</h3>

                <p>{pattern.description}</p>

                <div className="pattern-footer">
                  <span>{pattern.count}</span>

                  <span className="pattern-arrow">
                    →
                  </span>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* TIMELINE */}
        <section className="timeline-section">

          <div className="section-heading">
            <span className="eyebrow">RECENT ACTIVITY</span>

            <div>
              <h2>Your reflection timeline</h2>
              <p>
                A quick view of topics appearing in recent check-ins.
              </p>
            </div>
          </div>

          <div className="timeline">

            {timeline.map((item, index) => (
              <div className="timeline-item" key={index}>

                <div className="timeline-date">
                  <span>{item.day}</span>
                  <strong>{item.date}</strong>
                </div>

                <div className={`timeline-dot ${item.type}`}></div>

                <div className="timeline-content">
                  <span className="timeline-label">
                    CHECK-IN
                  </span>

                  <h3>{item.topic}</h3>

                  <p>{item.detail}</p>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* MAIN INSIGHT */}
        <section className="insight-section">

          <div className="insight-glow"></div>

          <div className="insight-content">

            <div className="insight-icon">
              ✦
            </div>

            <div>
              <span className="eyebrow">SOMETHING WORTH NOTICING</span>

              <h2>
                Academic topics have appeared more frequently recently.
              </h2>

              <p>
                Your recent check-ins have included more references to
                assignments, projects and study-related activities.
              </p>

              <span className="insight-source">
                Based on your recent reflections
              </span>
            </div>

          </div>

        </section>

        {/* FOOTER NOTE */}
        <div className="changes-note">

          <div className="note-icon">
            i
          </div>

          <p>
            These observations are based only on your own check-ins.
            They are designed to help you notice patterns, not define
            how you feel.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Changes;