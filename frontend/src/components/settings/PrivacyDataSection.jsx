import { useState } from "react";
import { Download, FileText, HardDrive, Lock, Shield, Trash2 } from "lucide-react";

export default function PrivacyDataSection({ onTriggerConfirmation, onToast }) {
  const [onDeviceOnly, setOnDeviceOnly] = useState(true);
  const [telemetry, setTelemetry] = useState(false);

  const handleExportData = (format) => {
    // Generate mock export file download
    const exportPayload = {
      exportDate: new Date().toISOString(),
      user: "pooja@reflectra.app",
      profile: "Pooja Bhadane",
      storedCounts: {
        journalEntries: 42,
        checkIns: 128,
        deviceSyncDays: 28,
        experiments: 14,
      },
      message: "Exported from Reflectra encrypted personal backup",
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
      type: format === "json" ? "application/json" : "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `reflectra-backup-${new Date().toISOString().slice(0, 10)}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (onToast) onToast(`Export completed: reflectra-backup.${format} downloaded.`);
  };

  return (
    <article className="setting-card" id="privacy-data">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Shield size={20} color="var(--settings-teal)" />
            Privacy, Data Ownership & Storage
          </h2>
          <p>You hold complete sovereignty over every word, routine signal, and reflection</p>
        </div>
      </div>

      {/* Required Prominent Privacy Message */}
      <div className="privacy-pledge-banner">
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#E8F4F0",
            color: "#176653",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Lock size={20} />
        </div>
        <div>
          <p className="privacy-pledge-quote">
            “Your reflections belong to you. You control what is stored, analyzed, and deleted.”
          </p>
          <span style={{ fontSize: "12px", color: "var(--settings-text-muted)" }}>
            Reflectra Architecture Guarantee • Zero ad-trackers • Never sold or used for public LLM training
          </span>
        </div>
      </div>

      {/* Stored Data Breakdown */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span className="setting-row-title">Stored Data Overview</span>
          <span style={{ fontSize: "12px", color: "var(--settings-text-light)", display: "flex", alignItems: "center", gap: 5 }}>
            <HardDrive size={13} />
            4.2 MB total on-device storage
          </span>
        </div>

        <div className="stored-data-grid">
          <div className="stored-data-box">
            <span className="data-box-count">42</span>
            <span className="data-box-label">Journal Entries</span>
          </div>

          <div className="stored-data-box">
            <span className="data-box-count">128</span>
            <span className="data-box-label">Daily Check-ins</span>
          </div>

          <div className="stored-data-box">
            <span className="data-box-count">28</span>
            <span className="data-box-label">Device Usage Logs</span>
          </div>

          <div className="stored-data-box">
            <span className="data-box-count">14</span>
            <span className="data-box-label">Pattern Trials</span>
          </div>
        </div>
      </div>

      {/* Privacy Controls */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Local On-Device Processing</span>
          <p className="setting-row-desc">
            All NLP semantic parsing and correlation equations run locally in your browser sandbox using WebAssembly.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={onDeviceOnly}
            onChange={(e) => {
              setOnDeviceOnly(e.target.checked);
              if (onToast) onToast(`Local on-device processing ${e.target.checked ? "enforced" : "optional"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Anonymous Diagnostic Telemetry</span>
          <p className="setting-row-desc">
            Allow anonymous performance metrics (crash rates, render speed) to help improve app reliability. No reflection content is ever shared.
          </p>
        </div>

        <label className="setting-toggle-switch">
          <input
            type="checkbox"
            checked={telemetry}
            onChange={(e) => {
              setTelemetry(e.target.checked);
              if (onToast) onToast(`Telemetry ${e.target.checked ? "enabled" : "disabled"}.`);
            }}
          />
          <span className="toggle-slider" />
        </label>
      </div>

      {/* Data Export & Backup */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Export All Reflections & Data</span>
          <p className="setting-row-desc">
            Download an open, portable archive containing your journal entries, check-in timestamps, and baseline metrics.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className="btn-secondary-stone"
            onClick={() => handleExportData("json")}
          >
            <Download size={14} />
            Export JSON
          </button>
          <button
            type="button"
            className="btn-secondary-stone"
            onClick={() => handleExportData("csv")}
          >
            <FileText size={14} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Destructive Actions with Confirmation Dialogs */}
      <div
        style={{
          borderTop: "1px solid #F0EEE8",
          paddingTop: "18px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <span className="setting-row-title" style={{ color: "#B91C1C" }}>
          Danger Zone
        </span>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div>
            <strong style={{ fontSize: "13.5px", color: "var(--settings-text-main)" }}>
              Clear All Reflection History
            </strong>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--settings-text-muted)" }}>
              Permanently purge all 42 journal reflections and 128 check-ins while preserving account settings.
            </p>
          </div>

          <button
            type="button"
            className="btn-danger-red"
            onClick={() =>
              onTriggerConfirmation({
                title: "Clear All Reflection History?",
                message:
                  "This will permanently delete your 42 journal reflections and 128 check-in records. This action cannot be reversed.",
                confirmLabel: "Yes, Delete Reflection Data",
                actionType: "clear-reflections",
              })
            }
          >
            <Trash2 size={14} />
            Clear Data
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, paddingTop: 10, borderTop: "1px dashed #F2D2D2" }}>
          <div>
            <strong style={{ fontSize: "13.5px", color: "#B91C1C" }}>
              Delete Entire Reflectra Account
            </strong>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--settings-text-muted)" }}>
              Immediately destroy your account, encryption keys, and all personal baselines permanently.
            </p>
          </div>

          <button
            type="button"
            className="btn-danger-red"
            style={{ background: "#B91C1C", color: "#FFFFFF", borderColor: "#991B1B" }}
            onClick={() =>
              onTriggerConfirmation({
                title: "Delete Account Permanently?",
                message:
                  "Are you sure you want to delete your Reflectra account? All encryption keys, personal baselines, and historical signals will be purged forever.",
                confirmLabel: "Permanently Delete Account",
                actionType: "delete-account",
              })
            }
          >
            <Trash2 size={14} />
            Delete Account
          </button>
        </div>
      </div>
    </article>
  );
}
