import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function PreferencesSection({ onToast }) {
  const [language, setLanguage] = useState("en-US");
  const [timeFormat, setTimeFormat] = useState("12h");
  const [defaultRange, setDefaultRange] = useState("14d");
  const [startupTab, setStartupTab] = useState("insights");
  const [autoCheckinPrompt, setAutoCheckinPrompt] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  return (
    <article className="setting-card" id="preferences">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <SlidersHorizontal size={20} color="var(--settings-teal)" />
            App Preferences & Regional Formats
          </h2>
          <p>Customize your default analytical views, localization, and startup behavior</p>
        </div>
      </div>

      {/* Language */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Language & Regional Dialect</span>
          <p className="setting-row-desc">
            Primary language used across reflection guides, prompts, and insights.
          </p>
        </div>

        <select
          className="settings-select"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            if (onToast) onToast("Language preference saved.");
          }}
          style={{ width: "200px" }}
        >
          <option value="en-US">English (US)</option>
          <option value="en-GB">English (UK)</option>
          <option value="hi-IN">Hindi (हिंदी)</option>
          <option value="es-ES">Spanish (Español)</option>
          <option value="de-DE">German (Deutsch)</option>
          <option value="fr-FR">French (Français)</option>
        </select>
      </div>

      {/* Time Format */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Time Format</span>
          <p className="setting-row-desc">
            Controls how sleep onset, bedtime, and check-in times are formatted.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, background: "#EAE7DF", padding: 3, borderRadius: 10 }}>
          {[
            { id: "12h", label: "12-Hour (11:15 PM)" },
            { id: "24h", label: "24-Hour (23:15)" },
          ].map((fmt) => (
            <button
              key={fmt.id}
              type="button"
              onClick={() => {
                setTimeFormat(fmt.id);
                if (onToast) onToast(`Time format set to ${fmt.label}.`);
              }}
              style={{
                border: "none",
                background: timeFormat === fmt.id ? "#FFFFFF" : "transparent",
                color: timeFormat === fmt.id ? "var(--settings-teal)" : "#5B6661",
                fontWeight: timeFormat === fmt.id ? 700 : 500,
                fontSize: "12.5px",
                padding: "6px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: timeFormat === fmt.id ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
              }}
            >
              {fmt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Default Analytical Range */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Default Observation Range</span>
          <p className="setting-row-desc">
            Default historical window loaded when visiting Insights and Relationships.
          </p>
        </div>

        <select
          className="settings-select"
          value={defaultRange}
          onChange={(e) => {
            setDefaultRange(e.target.value);
            if (onToast) onToast(`Default range set to ${e.target.value}.`);
          }}
          style={{ width: "200px" }}
        >
          <option value="7d">Past 7 Days</option>
          <option value="14d">Past 14 Days (Recommended)</option>
          <option value="30d">Past 30 Days</option>
        </select>
      </div>

      {/* Startup Page */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Default Startup View</span>
          <p className="setting-row-desc">
            The page opened automatically when logging in or opening Reflectra.
          </p>
        </div>

        <select
          className="settings-select"
          value={startupTab}
          onChange={(e) => {
            setStartupTab(e.target.value);
            if (onToast) onToast(`Default startup view set to ${e.target.value}.`);
          }}
          style={{ width: "200px" }}
        >
          <option value="insights">Insights (AI Patterns)</option>
          <option value="dashboard">Dashboard Overview</option>
          <option value="relationships">Relationships</option>
          <option value="journal">Reflection Journal</option>
        </select>
      </div>

      {/* Auto-Open Check-in Prompt */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Auto-Prompt Morning Check-in</span>
          <p className="setting-row-desc">
            Automatically prompt for morning readiness check-in when launching Reflectra before noon.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={autoCheckinPrompt}
            onChange={(e) => {
              setAutoCheckinPrompt(e.target.checked);
              if (onToast) onToast(`Morning check-in auto-prompt ${e.target.checked ? "enabled" : "disabled"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Interactive Animations */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Subtle Chart & Node Animations</span>
          <p className="setting-row-desc">
            Render smooth physics on relationship network graphs and sparklines.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={animationsEnabled}
            onChange={(e) => {
              setAnimationsEnabled(e.target.checked);
              if (onToast) onToast(`Animations ${e.target.checked ? "enabled" : "disabled"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>
    </article>
  );
}
