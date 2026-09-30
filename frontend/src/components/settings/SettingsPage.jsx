import { useState } from "react";
import "./Settings.css";

import ConfirmationModal from "./ConfirmationModal";
import ProfileSection from "./ProfileSection";
import AppearanceSection from "./AppearanceSection";
import NotificationsSection from "./NotificationsSection";
import PrivacyDataSection from "./PrivacyDataSection";
import AiInsightsSection from "./AiInsightsSection";
import PersonalBaselineSection from "./PersonalBaselineSection";
import SecuritySection from "./SecuritySection";
import PreferencesSection from "./PreferencesSection";
import AboutSection from "./AboutSection";

import {
  Activity,
  Bell,
  Brain,
  Check,
  Info,
  Lock,
  Palette,
  Shield,
  SlidersHorizontal,
  Sparkles,
  User,
} from "lucide-react";

export default function SettingsPage({ user, onSignOut, onNavigateTab }) {
  const [activeSubTab, setActiveSubTab] = useState("profile");
  const [toastMessage, setToastMessage] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy-data", label: "Privacy & Data", icon: Shield },
    { id: "ai-insights", label: "AI & Insights", icon: Brain },
    { id: "personal-baseline", label: "Personal Baseline", icon: Activity },
    { id: "security", label: "Security", icon: Lock },
    { id: "preferences", label: "Preferences", icon: SlidersHorizontal },
    { id: "about", label: "About", icon: Info },
  ];

  const handleNavClick = (id) => {
    setActiveSubTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleConfirmAction = () => {
    if (!confirmationDialog) return;
    const { actionType } = confirmationDialog;

    if (actionType === "clear-reflections") {
      showToast("All 42 journal reflections and 128 check-ins were successfully cleared.");
    } else if (actionType === "delete-account") {
      showToast("Reflectra account and local keys permanently deleted.");
      setTimeout(() => {
        if (onSignOut) onSignOut();
      }, 1000);
    } else if (actionType === "signout-all-devices") {
      showToast("All other remote devices have been signed out.");
    }
    setConfirmationDialog(null);
  };

  return (
    <div className="settings-page-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            background: "#176653",
            color: "#FFFFFF",
            padding: "12px 20px",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            fontSize: "13.5px",
            fontWeight: 600,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Sparkles size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmationDialog && (
        <ConfirmationModal
          isOpen={true}
          title={confirmationDialog.title}
          message={confirmationDialog.message}
          confirmLabel={confirmationDialog.confirmLabel}
          onConfirm={handleConfirmAction}
          onClose={() => setConfirmationDialog(null)}
        />
      )}

      <div className="settings-layout-wrapper">
        {/* Page Header */}
        <section className="settings-header">
          <div className="settings-header-title-group">
            <h1>Settings & Preferences</h1>
            <p>
              Manage your personal identity, data sovereignty, AI pattern thresholds, and baseline anchors
            </p>
          </div>

          <div className="settings-header-actions">
            {onNavigateTab && (
              <button
                type="button"
                className="btn-secondary-stone"
                onClick={() => onNavigateTab("insights")}
                style={{ fontSize: "12px", padding: "6px 12px" }}
              >
                Back to Insights
              </button>
            )}

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "var(--settings-teal)",
                background: "var(--settings-teal-subtle)",
                padding: "6px 12px",
                borderRadius: "12px",
                fontWeight: 650,
              }}
            >
              <Check size={14} /> Auto-Saved to Encrypted Vault
            </span>
          </div>
        </section>

        {/* Two-Column SaaS Layout */}
        <div className="settings-grid-layout">
          {/* Sticky Left Navigation */}
          <aside className="settings-subnav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSubTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`settings-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </aside>

          {/* Right Main Content Column */}
          <main className="settings-section-container">
            {/* 1. Profile */}
            <ProfileSection user={user} onToast={showToast} />

            {/* 2. Appearance */}
            <AppearanceSection onToast={showToast} />

            {/* 3. Notifications */}
            <NotificationsSection onToast={showToast} />

            {/* 4. Privacy & Data */}
            <PrivacyDataSection
              onTriggerConfirmation={setConfirmationDialog}
              onToast={showToast}
            />

            {/* 5. AI & Insights */}
            <AiInsightsSection onToast={showToast} />

            {/* 6. Personal Baseline */}
            <PersonalBaselineSection onToast={showToast} />

            {/* 7. Security */}
            <SecuritySection
              onTriggerConfirmation={setConfirmationDialog}
              onToast={showToast}
            />

            {/* 8. Preferences */}
            <PreferencesSection onToast={showToast} />

            {/* 9. About */}
            <AboutSection onToast={showToast} />
          </main>
        </div>
      </div>
    </div>
  );
}
