import { useState } from "react";
import { Check, Laptop, Moon, Palette, Sun } from "lucide-react";

export default function AppearanceSection({ onToast }) {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedAccent, setSelectedAccent] = useState("teal");
  const [density, setDensity] = useState("comfortable");

  const themes = [
    { id: "light", label: "Light", icon: Sun, desc: "Warm off-white neutral tones" },
    { id: "dark", label: "Dark", icon: Moon, desc: "Tranquil midnight charcoal" },
    { id: "system", label: "System", icon: Laptop, desc: "Sync with OS theme" },
  ];

  const accents = [
    { id: "teal", label: "Forest Teal", hex: "#176653" },
    { id: "lavender", label: "Soft Lavender", hex: "#8165BE" },
    { id: "sage", label: "Tranquil Sage", hex: "#2E8B57" },
    { id: "slate", label: "Slate Blue", hex: "#3B82F6" },
    { id: "amber", label: "Warm Amber", hex: "#D97706" },
  ];

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    if (onToast) onToast(`Theme updated to ${themeId}.`);
  };

  const handleAccentChange = (accentId) => {
    setSelectedAccent(accentId);
    if (onToast) onToast(`Primary accent color updated to ${accentId}.`);
  };

  return (
    <article className="setting-card" id="appearance">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Palette size={20} color="var(--settings-teal)" />
            Appearance & Visual Theme
          </h2>
          <p>Customize the interface aesthetics, color accents, and layout density</p>
        </div>
      </div>

      {/* Theme Picker Grid */}
      <div>
        <span className="setting-row-title">Color Scheme</span>
        <p className="setting-row-desc" style={{ marginBottom: 12 }}>
          Choose your preferred brightness mode or match your operating system.
        </p>

        <div className="theme-selector-grid">
          {themes.map((t) => {
            const Icon = t.icon;
            const isActive = selectedTheme === t.id;
            return (
              <div
                key={t.id}
                className={`theme-tile ${isActive ? "active" : ""}`}
                onClick={() => handleThemeChange(t.id)}
              >
                <Icon size={22} color={isActive ? "var(--settings-teal)" : "#5B6661"} />
                <span style={{ fontSize: "14px", fontWeight: 650, color: "var(--settings-text-main)" }}>
                  {t.label}
                </span>
                <span style={{ fontSize: "11.5px", color: "var(--settings-text-muted)", textAlign: "center" }}>
                  {t.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accent Color Picker */}
      <div className="setting-row" style={{ alignItems: "flex-start", flexDirection: "column" }}>
        <div className="setting-row-info">
          <span className="setting-row-title">Brand Accent Color</span>
          <p className="setting-row-desc">
            Applied to active navigation tabs, interactive graphs, badges, and primary action buttons.
          </p>
        </div>

        <div className="accent-swatches-row">
          {accents.map((acc) => (
            <div
              key={acc.id}
              className={`swatch-circle ${selectedAccent === acc.id ? "active" : ""}`}
              style={{ backgroundColor: acc.hex }}
              onClick={() => handleAccentChange(acc.id)}
              title={acc.label}
            >
              {selectedAccent === acc.id && <Check size={16} />}
            </div>
          ))}
          <span style={{ fontSize: "12px", color: "var(--settings-text-muted)", marginLeft: 6 }}>
            {accents.find((a) => a.id === selectedAccent)?.label} Selected
          </span>
        </div>
      </div>

      {/* Spacing & Density */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Layout Spacing & Density</span>
          <p className="setting-row-desc">
            Comfortable provides more breathing room for reflective contemplation; compact fits more patterns on screen.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, background: "#EAE7DF", padding: 3, borderRadius: 10 }}>
          {["comfortable", "compact"].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => {
                setDensity(mode);
                if (onToast) onToast(`Layout density set to ${mode}.`);
              }}
              style={{
                border: "none",
                background: density === mode ? "#FFFFFF" : "transparent",
                color: density === mode ? "var(--settings-teal)" : "#5B6661",
                fontWeight: density === mode ? 700 : 500,
                fontSize: "12.5px",
                padding: "6px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: density === mode ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                textTransform: "capitalize",
              }}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
