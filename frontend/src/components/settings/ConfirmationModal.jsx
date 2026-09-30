import { AlertTriangle, X } from "lucide-react";

export default function ConfirmationModal({
  isOpen,
  title,
  message,
  confirmLabel = "Confirm",
  confirmVariant = "danger",
  onConfirm,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-panel" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: confirmVariant === "danger" ? "#FEE2E2" : "#E8F4F0",
                color: confirmVariant === "danger" ? "#B91C1C" : "#176653",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AlertTriangle size={20} />
            </div>
            <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#1C2622" }}>
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "#8E9993" }}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ margin: 0, fontSize: "14px", color: "#5B6661", lineHeight: 1.5 }}>
          {message}
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 6 }}>
          <button
            type="button"
            className="btn-secondary-stone"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={confirmVariant === "danger" ? "btn-danger-red" : "btn-primary-teal"}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
