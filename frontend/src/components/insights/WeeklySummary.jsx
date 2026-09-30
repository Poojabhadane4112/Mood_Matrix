import { ArrowUpRight, CheckCircle2, Clock, GitCompare, Sparkles } from "lucide-react";

export default function WeeklySummary({ onJumpToSection }) {
  return (
    <section className="weekly-summary-section">
      <div className="card-section-header" style={{ marginBottom: 14 }}>
        <div className="card-title-group">
          <h2>
            <Sparkles size={19} color="#176653" />
            Weekly Synthesis
          </h2>
          <p>Key observations distilled across your voluntary check-ins, routines, and reflection entries</p>
        </div>
        <span className="card-badge badge-teal">3 Primary Themes</span>
      </div>

      <div className="weekly-summary-grid">
        {/* Pillar 1: Meaningful Changes */}
        <article className="summary-pillar-card pillar-changes">
          <div>
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <Clock size={19} />
              </div>
              <span className="pillar-count">2 Shifts</span>
            </div>
            <h3 className="pillar-title" style={{ marginTop: 12 }}>Meaningful Changes</h3>
            <p className="pillar-body" style={{ marginTop: 8 }}>
              Bedtime drifted <strong>38 minutes later</strong> than your 60-day baseline over the last 5 nights, appearing alongside extended evening screen time (+55m).
            </p>
          </div>

          <button
            type="button"
            className="pillar-button"
            onClick={() => onJumpToSection && onJumpToSection("what-changed")}
          >
            Review Baseline Shifts
            <ArrowUpRight size={14} />
          </button>
        </article>

        {/* Pillar 2: Emerging Patterns */}
        <article className="summary-pillar-card pillar-emerging">
          <div>
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <GitCompare size={19} />
              </div>
              <span className="pillar-count">New Signal</span>
            </div>
            <h3 className="pillar-title" style={{ marginTop: 12 }}>Emerging Patterns</h3>
            <p className="pillar-body" style={{ marginTop: 8 }}>
              Midday outdoor breaks of 15+ minutes appeared alongside <strong>longer uninterrupted study sessions</strong> in 4 out of 5 observed instances this week.
            </p>
          </div>

          <button
            type="button"
            className="pillar-button"
            onClick={() => onJumpToSection && onJumpToSection("emerging")}
          >
            View Emerging Signals
            <ArrowUpRight size={14} />
          </button>
        </article>

        {/* Pillar 3: Positive Patterns */}
        <article className="summary-pillar-card pillar-positive">
          <div>
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <CheckCircle2 size={19} />
              </div>
              <span className="pillar-count">Self-Regulation</span>
            </div>
            <h3 className="pillar-title" style={{ marginTop: 12 }}>Positive Patterns</h3>
            <p className="pillar-body" style={{ marginTop: 8 }}>
              Morning routine regularity was <strong>14% higher</strong> than your personal baseline. After Tuesday's late study block, you naturally reset your schedule within 36 hours.
            </p>
          </div>

          <button
            type="button"
            className="pillar-button"
            onClick={() => onJumpToSection && onJumpToSection("positive")}
          >
            Explore Strengths
            <ArrowUpRight size={14} />
          </button>
        </article>
      </div>
    </section>
  );
}
