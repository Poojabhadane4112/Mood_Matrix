import { useState } from "react";
import { CheckCircle2, KeyRound, Laptop, Lock, LogOut, Smartphone } from "lucide-react";

export default function SecuritySection({ onTriggerConfirmation, onToast }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(true);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!currentPassword) {
      if (onToast) onToast("Please enter your current password.");
      return;
    }
    if (newPassword.length < 8) {
      if (onToast) onToast("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      if (onToast) onToast("New passwords do not match.");
      return;
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    if (onToast) onToast("Password successfully changed.");
  };

  const sessions = [
    {
      id: "curr",
      device: "Chrome on Windows 11",
      icon: Laptop,
      location: "Mumbai, India",
      timestamp: "Active now",
      isCurrent: true,
    },
    {
      id: "s2",
      device: "Reflectra Mobile (iPhone 15)",
      icon: Smartphone,
      location: "Mumbai, India",
      timestamp: "3 hours ago",
      isCurrent: false,
    },
    {
      id: "s3",
      device: "Safari on MacBook Pro",
      icon: Laptop,
      location: "Pune, India",
      timestamp: "Sep 28, 2026",
      isCurrent: false,
    },
  ];

  return (
    <article className="setting-card" id="security">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <Lock size={20} color="var(--settings-teal)" />
            Security & Authentication
          </h2>
          <p>Protect your personal reflection space with strong encryption and session management</p>
        </div>
      </div>

      {/* Change Password Form */}
      <div>
        <span className="setting-row-title" style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <KeyRound size={16} color="var(--settings-teal)" />
          Change Account Password
        </span>
        <p className="setting-row-desc" style={{ marginBottom: 14 }}>
          Choose a secure, unique password to protect your on-device encryption vault.
        </p>

        <form onSubmit={handlePasswordSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--settings-text-main)" }}>
              Current Password
            </label>
            <input
              type="password"
              className="settings-input"
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--settings-text-main)" }}>
              New Password
            </label>
            <input
              type="password"
              className="settings-input"
              placeholder="Min 8 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--settings-text-main)" }}>
              Confirm New Password
            </label>
            <input
              type="password"
              className="settings-input"
              placeholder="Repeat new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn-primary-teal" style={{ height: "42px", width: "100%", justifyContent: "center" }}>
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* 2FA Status */}
      <div className="setting-row">
        <div className="setting-row-info">
          <span className="setting-row-title">Two-Factor Authentication (2FA)</span>
          <p className="setting-row-desc">
            Require an authenticator code (Google Authenticator / 1Password) on new device sign-ins.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="session-badge-current" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <CheckCircle2 size={12} /> Active (Enforced)
          </span>

          <label className="setting-toggle-switch">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={(e) => {
                setTwoFactor(e.target.checked);
                if (onToast) onToast(`2FA ${e.target.checked ? "activated" : "disabled"}.`);
              }}
            />
            <span className="toggle-slider" />
          </label>
        </div>
      </div>

      {/* Active Login Sessions */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span className="setting-row-title">Active Devices & Sessions</span>

          <button
            type="button"
            className="btn-danger-red"
            style={{ fontSize: "12px", padding: "6px 12px" }}
            onClick={() =>
              onTriggerConfirmation({
                title: "Sign Out All Other Devices?",
                message:
                  "This will immediately invalidate the session keys on your iPhone and MacBook Pro. Your current desktop session will remain active.",
                confirmLabel: "Sign Out All Other Devices",
                actionType: "signout-all-devices",
              })
            }
          >
            <LogOut size={13} />
            Sign Out All Other Devices
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {sessions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="session-item">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: s.isCurrent ? "#E8F4F0" : "#F4F3EE",
                      color: s.isCurrent ? "#176653" : "#5B6661",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "13.5px", color: "var(--settings-text-main)" }}>
                      {s.device}
                    </strong>
                    <div style={{ fontSize: "12px", color: "var(--settings-text-muted)" }}>
                      {s.location} • {s.timestamp}
                    </div>
                  </div>
                </div>

                {s.isCurrent ? (
                  <span className="session-badge-current">This Device</span>
                ) : (
                  <span style={{ fontSize: "12px", color: "var(--settings-text-light)" }}>
                    Encrypted Session
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
