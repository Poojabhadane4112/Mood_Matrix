import { useState } from "react";
import { Activity, BookOpen, Clock, Moon, RotateCcw, Smartphone, Zap } from "lucide-react";

export default function PersonalBaselineSection({ onToast }) {
  const [baselines, setBaselines] = useState({
    sleepHours: 7.5,
    studyHours: 3.25,
    eveningScreenMins: 90,
    focusMins: 45,
    dailySteps: 7500,
    journalPerWeek: 4,
  });

  const handleSliderChange = (key, val) => {
    setBaselines((prev) => ({ ...prev, [key]: Number(val) }));
  };

  const handleResetToAuto = () => {
    setBaselines({
      sleepHours: 7.4,
      studyHours: 3.1,
      eveningScreenMins: 80,
      focusMins: 48,
      dailySteps: 7200,
      journalPerWeek: 4,
    });
    if (onToast) onToast("Baselines reset to your 60-day auto-calculated rolling average.");
  };

  return (
    <article className="setting-card" id="personal-baseline">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Activity size={20} color="var(--settings-teal)" />
            Personal Baseline Anchors
          </h2>
          <p>
            Reflectra measures changes and routine drift strictly against your own personal normal, never against others
          </p>
        </div>

        <button
          type="button"
          className="btn-secondary-stone"
          onClick={handleResetToAuto}
        >
          <RotateCcw size={13} />
          Auto-Calculate (60-Day)
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Sleep Duration Slider */}
        <div className="baseline-slider-group">
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <Moon size={15} color="#176653" />
              Typical Nightly Sleep Target
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {Math.floor(baselines.sleepHours)}h {Math.round((baselines.sleepHours % 1) * 60)}m
            </strong>
          </div>
          <input
            type="range"
            min="5"
            max="10"
            step="0.25"
            className="baseline-range-input"
            value={baselines.sleepHours}
            onChange={(e) => handleSliderChange("sleepHours", e.target.value)}
          />
        </div>

        {/* Study / Work Duration Slider */}
        <div className="baseline-slider-group">
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <Clock size={15} color="#176653" />
              Daily Focused Study / Academic Work
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {Math.floor(baselines.studyHours)}h {Math.round((baselines.studyHours % 1) * 60)}m
            </strong>
          </div>
          <input
            type="range"
            min="1"
            max="8"
            step="0.25"
            className="baseline-range-input"
            value={baselines.studyHours}
            onChange={(e) => handleSliderChange("studyHours", e.target.value)}
          />
        </div>

        {/* Evening Screen Time */}
        <div className="baseline-slider-group">
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <Smartphone size={15} color="#176653" />
              Evening Screen Time Budget (after 9 PM)
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {Math.floor(baselines.eveningScreenMins / 60)}h {baselines.eveningScreenMins % 60}m
            </strong>
          </div>
          <input
            type="range"
            min="15"
            max="240"
            step="15"
            className="baseline-range-input"
            value={baselines.eveningScreenMins}
            onChange={(e) => handleSliderChange("eveningScreenMins", e.target.value)}
          />
        </div>

        {/* Uninterrupted Focus Block */}
        <div className="baseline-slider-group">
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <Zap size={15} color="#176653" />
              Uninterrupted Focus Session Target
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {baselines.focusMins} minutes
            </strong>
          </div>
          <input
            type="range"
            min="15"
            max="120"
            step="5"
            className="baseline-range-input"
            value={baselines.focusMins}
            onChange={(e) => handleSliderChange("focusMins", e.target.value)}
          />
        </div>

        {/* Daily Movement / Steps */}
        <div className="baseline-slider-group">
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <Activity size={15} color="#176653" />
              Daily Movement & Step Anchor
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {baselines.dailySteps.toLocaleString()} steps
            </strong>
          </div>
          <input
            type="range"
            min="2000"
            max="15000"
            step="500"
            className="baseline-range-input"
            value={baselines.dailySteps}
            onChange={(e) => handleSliderChange("dailySteps", e.target.value)}
          />
        </div>

        {/* Journal Reflection Frequency */}
        <div className="baseline-slider-group" style={{ borderBottom: "none" }}>
          <div className="baseline-slider-header">
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
              <BookOpen size={15} color="#176653" />
              Journal Reflection Frequency
            </span>
            <strong style={{ color: "var(--settings-teal)", fontSize: "15px" }}>
              {baselines.journalPerWeek} entries / week
            </strong>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            step="1"
            className="baseline-range-input"
            value={baselines.journalPerWeek}
            onChange={(e) => handleSliderChange("journalPerWeek", e.target.value)}
          />
        </div>
      </div>
    </article>
  );
}
