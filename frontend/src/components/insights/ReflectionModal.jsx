import { useState } from "react";
import { BookOpen, Check, Lock, Sparkles, X } from "lucide-react";

export default function ReflectionModal({ topic = "Observed Pattern", isOpen, onClose, onSave }) {
  const [reflectionText, setReflectionText] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveToJournal = () => {
    if (onSave) onSave(reflectionText);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="reflection-modal-backdrop" onClick={onClose}>
      <div className="reflection-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "11.5px", fontWeight: 700, color: "var(--teal-primary)", textTransform: "uppercase" }}>
              <Sparkles size={13} />
              <span>Personal Reflection</span>
            </div>
            <h3 style={{ margin: "4px 0 0 0", fontSize: "20px", fontWeight: 700, color: "var(--text-main)" }}>
              Reflect on: {topic}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-light)" }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ margin: 0, fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.5 }}>
          When you observe this rhythm in your data, how does it feel in your actual body and daily life? Does this pattern serve your current intentions?
        </p>

        <textarea
          className="reflection-textarea"
          placeholder="Write your thoughts privately here... Reflectra keeps your words completely encrypted."
          value={reflectionText}
          onChange={(e) => setReflectionText(e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "12px", color: "var(--text-light)" }}>
            <Lock size={12} color="#176653" />
            <span>Encrypted • Private to you</span>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              type="button"
              className="button-ghost-teal"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="button"
              className="button-primary-teal"
              onClick={handleSaveToJournal}
              disabled={savedSuccess}
            >
              {savedSuccess ? (
                <>
                  <Check size={14} />
                  Saved to Journal
                </>
              ) : (
                <>
                  <BookOpen size={14} />
                  Save to Journal
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
