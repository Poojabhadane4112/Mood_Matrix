import { Link } from "react-router-dom";
import "./RecurringThemes.css";

function RecurringThemes() {
  const themes = [
    {
      icon: "⌁",
      title: "Academic work",
      description:
        "Assignments, projects, exams and study-related activities.",
      mentions: 8,
      checkIns: 5,
      frequency: 82,
      status: "Recurring",
      type: "primary",
    },
    {
      icon: "○",
      title: "Friends & social time",
      description:
        "Conversations, meeting friends and social activities.",
      mentions: 5,
      checkIns: 4,
      frequency: 61,
      status: "Recurring",
      type: "social",
    },
    {
      icon: "◇",
      title: "Personal time",
      description:
        "Relaxing, hobbies and making time for yourself.",
      mentions: 4,
      checkIns: 3,
      frequency: 48,
      status: "Growing",
      type: "personal",
    },
    {
      icon: "◒",
      title: "Sleep & routine",
      description:
        "Sleep patterns, daily routines and how your day is structured.",
      mentions: 3,
      checkIns: 3,
      frequency: 36,
      status: "Recurring",
      type: "routine",
    },
  ];

  const recentThemes = [
    {
      title: "Personal time",
      text: "Appeared in your latest check-ins.",
      icon: "✦",
    },
    {
      title: "Project work",
      text: "Appeared several times this period.",
      icon: "↗",
    },
    {
      title: "Friends",
      text: "Continues to appear across recent entries.",
      icon: "○",
    },
  ];

  return (
    <div className="themes-page">
      <div className="themes-container">
        <nav className="insight-navigation" aria-label="Page navigation">
          <Link to="/">← Dashboard</Link>
          <Link to="/changes">What changed? →</Link>
        </nav>

        {/* HEADER */}
        <header className="themes-header">

          <div className="themes-title-area">
            <span className="themes-eyebrow">
              YOUR REFLECTIONS
            </span>

            <h1>Recurring themes</h1>

            <p>
              What topics keep appearing across your recent
              check-ins?
            </p>
          </div>

          <div className="themes-period">
            <span>Looking at</span>

            <button className="period-button">
              Last 30 days
              <span>⌄</span>
            </button>
          </div>

        </header>

        {/* INTRO CARD */}
        <section className="themes-intro">

          <div className="intro-symbol">
            ✦
          </div>

          <div>
            <span className="themes-small-label">
              A LOOK AT YOUR PATTERNS
            </span>

            <h2>
              Some topics have been showing up
              repeatedly in your reflections.
            </h2>

            <p>
              These themes are identified from the topics
              mentioned across your own check-ins.
            </p>
          </div>

        </section>

        {/* OVERVIEW */}
        <section className="themes-overview">

          <div className="overview-item">
            <span>RECURRING THEMES</span>
            <strong>4</strong>
            <small>identified recently</small>
          </div>

          <div className="overview-divider"></div>

          <div className="overview-item">
            <span>MOST MENTIONED</span>
            <strong>8</strong>
            <small>academic work mentions</small>
          </div>

          <div className="overview-divider"></div>

          <div className="overview-item">
            <span>CHECK-INS ANALYZED</span>
            <strong>12</strong>
            <small>recent entries</small>
          </div>

        </section>

        {/* MAIN THEMES */}
        <section className="themes-section">

          <div className="themes-section-heading">
            <div>
              <span className="themes-eyebrow">
                RECURRING PATTERNS
              </span>

              <h2>What keeps appearing</h2>

              <p>
                Frequency is based on mentions across your
                recent check-ins.
              </p>
            </div>
          </div>

          <div className="theme-list">

            {themes.map((theme, index) => (
              <article
                className={`theme-card ${theme.type}`}
                key={index}
              >

                <div className="theme-card-top">

                  <div className="theme-icon">
                    {theme.icon}
                  </div>

                  <span className="theme-status">
                    {theme.status}
                  </span>

                </div>

                <div className="theme-main">

                  <div className="theme-heading">

                    <div>
                      <h3>{theme.title}</h3>

                      <p>
                        {theme.description}
                      </p>
                    </div>

                    <div className="theme-count">
                      <strong>{theme.mentions}</strong>
                      <span>mentions</span>
                    </div>

                  </div>

                  <div className="theme-frequency">

                    <div className="frequency-header">
                      <span>
                        Appeared across {theme.checkIns} check-ins
                      </span>

                      <strong>
                        {theme.frequency}%
                      </strong>
                    </div>

                    <div className="frequency-track">
                      <div
                        className="frequency-fill"
                        style={{
                          width: `${theme.frequency}%`,
                        }}
                      ></div>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* RECENTLY EMERGING */}
        <section className="emerging-section">

          <div className="emerging-header">

            <div>
              <span className="themes-eyebrow">
                RECENTLY NOTICED
              </span>

              <h2>What's showing up lately?</h2>

              <p>
                Topics that have appeared in your more recent
                reflections.
              </p>
            </div>

            <div className="emerging-badge">
              Recent
            </div>

          </div>

          <div className="recent-theme-grid">

            {recentThemes.map((theme, index) => (
              <div
                className="recent-theme-card"
                key={index}
              >

                <div className="recent-icon">
                  {theme.icon}
                </div>

                <div>
                  <h3>{theme.title}</h3>

                  <p>{theme.text}</p>
                </div>

                <span className="recent-arrow">
                  →
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* THEME ACTIVITY */}
        <section className="theme-activity">

          <div className="activity-heading">

            <div>
              <span className="themes-eyebrow">
                THEME ACTIVITY
              </span>

              <h2>How your themes appeared</h2>

              <p>
                A visual view of recent theme mentions.
              </p>
            </div>

          </div>

          <div className="theme-chart">

            <div className="chart-row">
              <span>Academic work</span>

              <div className="theme-chart-track">
                <div className="theme-chart-fill academic">
                  <span>8</span>
                </div>
              </div>
            </div>

            <div className="chart-row">
              <span>Friends</span>

              <div className="theme-chart-track">
                <div className="theme-chart-fill friends">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div className="chart-row">
              <span>Personal time</span>

              <div className="theme-chart-track">
                <div className="theme-chart-fill personal">
                  <span>4</span>
                </div>
              </div>
            </div>

            <div className="chart-row">
              <span>Sleep & routine</span>

              <div className="theme-chart-track">
                <div className="theme-chart-fill routine">
                  <span>3</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* REFLECTION CARD */}
        <section className="theme-reflection">

          <div className="reflection-symbol">
            ?
          </div>

          <div className="reflection-content">

            <span className="themes-small-label">
              REFLECTION PROMPT
            </span>

            <h2>
              Is there a theme here that you want
              to understand better?
            </h2>

            <p>
              You can explore it through your next check-in.
              There is no right or wrong answer.
            </p>

            <button className="reflection-button">
              Start a check-in
              <span>→</span>
            </button>

          </div>

        </section>

        {/* DISCLAIMER / CONTEXT */}
        <div className="themes-note">

          <div className="note-icon">
            i
          </div>

          <p>
            Themes are observations generated from your own
            reflections. They are not labels or conclusions
            about you.
          </p>

        </div>

      </div>
    </div>
  );
}

export default RecurringThemes;