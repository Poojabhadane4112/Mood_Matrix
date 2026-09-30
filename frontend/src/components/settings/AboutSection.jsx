import { useState } from "react";
import { CheckCircle2, FileText, HelpCircle, Info, MessageSquare, Shield, Sparkles } from "lucide-react";

export default function AboutSection({ onToast }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [policyModal, setPolicyModal] = useState(null);

  const handleSendFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setFeedbackOpen(false);
    setFeedbackText("");
    if (onToast) onToast("Thank you for your feedback! It helps improve Reflectra's reflection companion.");
  };

  return (
    <article className="setting-card" id="about">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Info size={20} color="var(--settings-teal)" />
            About Reflectra
          </h2>
          <p>Application architecture, licensing, documentation, and support</p>
        </div>

        <span
          style={{
            background: "#E8F4F0",
            color: "#176653",
            fontSize: "12px",
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: "12px",
          }}
        >
          v2.4.0 Stable
        </span>
      </div>

      {/* App Overview Card */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#FCFCFA", border: "1px solid var(--settings-border)", borderRadius: "14px", padding: "18px 20px" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "#176653",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(23, 102, 83, 0.2)",
            flexShrink: 0,
          }}
        >
          <Sparkles size={24} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <strong style={{ fontSize: "16px", color: "var(--settings-text-main)" }}>
            Reflectra — Mood & Routine Traceability
          </strong>
          <p style={{ margin: 0, fontSize: "13px", color: "var(--settings-text-muted)", lineHeight: 1.45 }}>
            A self-awareness application designed to help individuals discover how different facets of daily life appear together—without judgment, medical diagnosis, or forced metrics.
          </p>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {/* Help & Guide */}
        <button
          type="button"
          className="btn-secondary-stone"
          onClick={() => {
            if (onToast) onToast("Reflectra User Guide & FAQ opened.");
          }}
          style={{ justifyContent: "center", padding: "12px 14px", height: "auto" }}
        >
          <HelpCircle size={16} color="var(--settings-teal)" />
          User Guide & FAQ
        </button>

        {/* Feedback */}
        <button
          type="button"
          className="btn-secondary-stone"
          onClick={() => setFeedbackOpen(true)}
          style={{ justifyContent: "center", padding: "12px 14px", height: "auto" }}
        >
          <MessageSquare size={16} color="var(--settings-teal)" />
          Share Feedback
        </button>

        {/* Terms */}
        <button
          type="button"
          className="btn-secondary-stone"
          onClick={() => setPolicyModal("terms")}
          style={{ justifyContent: "center", padding: "12px 14px", height: "auto" }}
        >
          <FileText size={16} color="var(--settings-teal)" />
          Terms of Service
        </button>

        {/* Privacy Policy */}
        <button
          type="button"
          className="btn-secondary-stone"
          onClick={() => setPolicyModal("privacy")}
          style={{ justifyContent: "center", padding: "12px 14px", height: "auto" }}
        >
          <Shield size={16} color="var(--settings-teal)" />
          Privacy Policy
        </button>
      </div>

      {/* Diagnostics / Engine Status */}
      <div className="setting-row" style={{ borderBottom: "none", paddingTop: 10 }}>
        <div className="setting-row-info">
          <span className="setting-row-title">On-Device Pattern Engine Diagnostics</span>
          <p className="setting-row-desc">
            Local SQLite/IndexedDB vault status, WebAssembly compiler health, and pattern cache.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--settings-teal)", fontSize: "12.5px", fontWeight: 700 }}>
          <CheckCircle2 size={16} />
          <span>All Systems Operational</span>
        </div>
      </div>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="modal-backdrop" onClick={() => setFeedbackOpen(false)}>
          <div className="modal-dialog-panel" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--settings-text-main)" }}>
                Share Your Feedback
              </h3>
              <button
                type="button"
                onClick={() => setFeedbackOpen(false)}
                style={{ background: "transparent", border: "none", cursor: "pointer", color: "#8E9993" }}
              >
                ✕
              </button>
            </div>

            <p style={{ margin: 0, fontSize: "13.5px", color: "var(--settings-text-muted)" }}>
              What feels natural in Reflectra? What could feel calmer or more helpful? We read every thought.
            </p>

            <textarea
              className="settings-input"
              style={{ height: "110px", padding: "12px", resize: "vertical" }}
              placeholder="Tell us what you think..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              autoFocus
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                type="button"
                className="btn-secondary-stone"
                onClick={() => setFeedbackOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-primary-teal"
                onClick={handleSendFeedback}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {policyModal && (
        <div className="modal-backdrop" onClick={() => setPolicyModal(null)}>
          <div className="modal-dialog-panel" style={{ maxWidth: "560px" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--settings-text-main)" }}>
                {policyModal === "terms" ? "Reflectra Terms of Service" : "Reflectra Privacy Policy"}
              </h3>
              <button
                type="button"
                onClick={() => setPolicyModal(null)}
                style={{ background: "transparent", border: "none", cursor: "pointer", color: "#8E9993" }}
              >
                ✕
              </button>
            </div>

            <div style={{ maxHeight: "300px", overflowY: "auto", fontSize: "13px", color: "var(--settings-text-muted)", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 10, paddingRight: 6 }}>
              <p>
                <strong>1. Non-Clinical Nature:</strong> Reflectra is designed solely for self-reflection and personal lifestyle awareness. It is not a medical device, diagnosis tool, or clinical psychiatric service.
              </p>
              <p>
                <strong>2. Data Sovereignty:</strong> You own your reflections. We do not sell personal journal entries, screen time logs, or check-in answers to third parties or advertising networks.
              </p>
              <p>
                <strong>3. Association $\neq$ Causation:</strong> All pattern indicators describe mathematical correlations in voluntary data and do not constitute proof of causation.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn-primary-teal"
                onClick={() => setPolicyModal(null)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
