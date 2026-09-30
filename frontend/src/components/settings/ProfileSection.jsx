import { useState } from "react";
import { Camera, Clock, Save, User } from "lucide-react";

export default function ProfileSection({ user, onToast }) {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.name || "Pooja Bhadane");
  const [username, setUsername] = useState("poojabhadane");
  const [email, setEmail] = useState(user?.email || "pooja@reflectra.app");
  const [avatarInitials, setAvatarInitials] = useState("PB");

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    if (fullName) {
      const parts = fullName.trim().split(" ");
      const inits = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
      setAvatarInitials(inits);
    }
    if (onToast) onToast("Profile changes saved successfully.");
  };

  const handleAvatarChange = () => {
    if (onToast) onToast("Photo uploaded. Using high-resolution local avatar.");
  };

  return (
    <article className="setting-card" id="profile">
      <div className="setting-card-header">
        <div className="setting-card-title-group">
          <h2>
            <User size={20} color="var(--settings-teal)" />
            Profile & Identity
          </h2>
          <p>Manage your public persona, contact details, and account credentials</p>
        </div>

        <button
          type="button"
          className={isEditing ? "btn-secondary-stone" : "btn-primary-teal"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Avatar & Key Overview */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #176653 0%, #268C70 100%)",
              color: "#FFFFFF",
              fontSize: "24px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(23, 102, 83, 0.2)",
            }}
          >
            {avatarInitials}
          </div>

          {isEditing && (
            <button
              type="button"
              onClick={handleAvatarChange}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid #DEDBD2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
              title="Change photo"
              aria-label="Change photo"
            >
              <Camera size={13} color="#176653" />
            </button>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "19px", fontWeight: 700, color: "var(--settings-text-main)" }}>
              {fullName}
            </span>
            <span
              style={{
                background: "#E8F4F0",
                color: "#176653",
                fontSize: "11.5px",
                fontWeight: 650,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Personal Reflection Space
            </span>
          </div>

          <span style={{ fontSize: "13.5px", color: "var(--settings-text-muted)" }}>
            @{username} • {email}
          </span>

          <span style={{ fontSize: "12px", color: "var(--settings-text-light)", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
            <Clock size={12} />
            Member since September 2025 (Continuous personal exploration)
          </span>
        </div>
      </div>

      {/* Editable Fields Form */}
      {isEditing ? (
        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "12.5px", fontWeight: 650, color: "var(--settings-text-main)" }}>
                Full Name
              </label>
              <input
                type="text"
                className="settings-input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "12.5px", fontWeight: 650, color: "var(--settings-text-main)" }}>
                Username
              </label>
              <input
                type="text"
                className="settings-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "12.5px", fontWeight: 650, color: "var(--settings-text-main)" }}>
              Email Address
            </label>
            <input
              type="email"
              className="settings-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 6 }}>
            <button
              type="button"
              className="btn-secondary-stone"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary-teal">
              <Save size={14} />
              Save Profile Changes
            </button>
          </div>
        </form>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 4 }}>
          <div className="stored-data-box">
            <span className="data-box-label">Primary Account</span>
            <span style={{ fontSize: "14px", fontWeight: 650, color: "var(--settings-text-main)" }}>
              {email}
            </span>
          </div>

          <div className="stored-data-box">
            <span className="data-box-label">Profile Identifier</span>
            <span style={{ fontSize: "14px", fontWeight: 650, color: "var(--settings-text-main)" }}>
              @{username}
            </span>
          </div>

          <div className="stored-data-box">
            <span className="data-box-label">Account Creation</span>
            <span style={{ fontSize: "14px", fontWeight: 650, color: "var(--settings-text-main)" }}>
              Sep 27, 2025
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
