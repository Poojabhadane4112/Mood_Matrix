import { useState } from "react";
import { Bell, Clock, Mail, MessageSquare } from "lucide-react";

export default function NotificationsSection({ onToast }) {
  const [reflectionTime, setReflectionTime] = useState("21:30");
  const [toggles, setToggles] = useState({
    reflectionReminder: true,
    morningCheckin: true,
    insightsAlerts: true,
    weeklySummary: true,
    browserPush: false,
    emailDigest: true,
  });

  const handleToggle = (key, label) => {
    const nextVal = !toggles[key];
    setToggles((prev) => ({ ...prev, [key]: nextVal }));
    if (onToast) onToast(`${label} ${nextVal ? "enabled" : "disabled"}.`);
  };

  return (
    <article className="setting-card" id="notifications">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Bell size={20} color="var(--settings-teal)" />
            Notifications & Ritual Reminders
          </h2>
          <p>Configure gentle cues for reflection, check-in anchors, and weekly pattern digests</p>
        </div>
      </div>

      {/* Evening Reflection Reminder */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Evening Wind-Down Reflection</span>
          <p className="setting-row-desc">
            A gentle non-intrusive reminder to jot down your voluntary thoughts and daily reflections.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <Clock size={13} color="#176653" />
            <input
              type="time"
              className="settings-input"
              value={reflectionTime}
              onChange={(e) => {
                setReflectionTime(e.target.value);
                if (onToast) onToast(`Evening reminder set for ${e.target.value}.`);
              }}
              style={{ width: "130px", height: "32px", fontSize: "12.5px" }}
            />
          </div>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={toggles.reflectionReminder}
            onChange={() => handleToggle("reflectionReminder", "Evening reminder")}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Morning Daily Check-in */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Morning Readiness Check-in</span>
          <p className="setting-row-desc">
            Prompt to log morning vitality, sleep quality tag, and initial mindset (8:30 AM).
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={toggles.morningCheckin}
            onChange={() => handleToggle("morningCheckin", "Morning check-in")}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Meaningful Pattern Discovery Alerts */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">New Pattern & Insight Discoveries</span>
          <p className="setting-row-desc">
            Notify me when Reflectra discovers a high-confidence correlation (e.g. sleep duration co-occurring with energy).
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={toggles.insightsAlerts}
            onChange={() => handleToggle("insightsAlerts", "Pattern discovery notifications")}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Weekly Pattern Summaries */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Sunday Evening Synthesis Digest</span>
          <p className="setting-row-desc">
            Receive a weekly recap of baseline drift, emerging rhythms, and positive routines.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={toggles.weeklySummary}
            onChange={() => handleToggle("weeklySummary", "Sunday synthesis")}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Delivery Channels Sub-section */}
      <div style={{ paddingTop: 8 }}>
        <span className="setting-row-title" style={{ fontSize: "14px", display: "block", marginBottom: 6 }}>
          Delivery Channels
        </span>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="stored-data-box" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MessageSquare size={17} color="#176653" />
              <div>
                <strong style={{ fontSize: "13px", color: "var(--settings-text-main)" }}>Browser Push</strong>
                <div style={{ fontSize: "11px", color: "var(--settings-text-muted)" }}>Desktop notifications</div>
              </div>
            </div>

            <label className="setting-toggle-switch">
              <input
                type="checkbox"
                checked={toggles.browserPush}
                onChange={() => handleToggle("browserPush", "Browser push")}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="stored-data-box" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Mail size={17} color="#176653" />
              <div>
                <strong style={{ fontSize: "13px", color: "var(--settings-text-main)" }}>Email Summaries</strong>
                <div style={{ fontSize: "11px", color: "var(--settings-text-muted)" }}>pooja@reflectra.app</div>
              </div>
            </div>

            <label className="setting-toggle-switch">
              <input
                type="checkbox"
                checked={toggles.emailDigest}
                onChange={() => handleToggle("emailDigest", "Email digest")}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>
      </div>
    </article>
  );
}
