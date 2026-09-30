import { useState } from "react";
import "./Insights.css";

import InsightsHeader from "./InsightsHeader";
import CoreFlowBar from "./CoreFlowBar";
import WeeklySummary from "./WeeklySummary";
import WhatChangedSparklines from "./WhatChangedSparklines";
import MeaningfulInsightCards from "./MeaningfulInsightCards";
import HiddenPatternMissed from "./HiddenPatternMissed";
import EvidencePanel from "./EvidencePanel";
import EmergingPatterns from "./EmergingPatterns";
import PositivePatterns from "./PositivePatterns";
import UnusualPatternDay from "./UnusualPatternDay";
import JournalThemesComparison from "./JournalThemesComparison";
import PatternStory from "./PatternStory";
import InsightEvolution from "./InsightEvolution";
import BackTowardBaseline from "./BackTowardBaseline";
import PatternExperiments from "./PatternExperiments";
import ExperimentResults from "./ExperimentResults";
import ReflectionModal from "./ReflectionModal";
import InsightFeedbackSection from "./InsightFeedbackSection";

export default function InsightsPage({ onNavigateTab }) {
  const [selectedRange, setSelectedRange] = useState("14d");
  const [activeFlowStep, setActiveFlowStep] = useState("INSIGHT");
  const [toastMessage, setToastMessage] = useState(null);
  const [reflectionModal, setReflectionModal] = useState({
    isOpen: false,
    topic: "",
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleJumpToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleStepClick = (stepId) => {
    setActiveFlowStep(stepId);
    if (stepId === "DATA") handleJumpToSection("evidence");
    else if (stepId === "CHANGE") handleJumpToSection("what-changed");
    else if (stepId === "PATTERN") handleJumpToSection("pattern-story");
    else if (stepId === "EVIDENCE") handleJumpToSection("evidence");
    else if (stepId === "INSIGHT") handleJumpToSection("insight-evolution");
    else if (stepId === "EXPERIMENT") handleJumpToSection("experiments");
    else if (stepId === "NEW DATA") handleJumpToSection("experiment-results");
    else if (stepId === "EVOLVING INSIGHT") handleJumpToSection("insight-evolution");
  };

  const openReflection = (topic) => {
    setReflectionModal({
      isOpen: true,
      topic: topic || "Observed Life Rhythm",
    });
  };

  const closeReflection = () => {
    setReflectionModal({ isOpen: false, topic: "" });
  };

  const handleSaveReflection = (text) => {
    if (text) {
      showToast(`Reflection saved to your private journal: "${text.slice(0, 30)}..."`);
    } else {
      showToast("Reflection saved to your private journal entries.");
    }
    if (onNavigateTab) {
      // Tab navigation ready when user wants to switch to journal
    }
  };

  return (
    <div className="insights-page-container">
      {/* Toast Notification Banner */}
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
            animation: "slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span>✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="insights-content">
        {/* 1. Header */}
        <InsightsHeader
          selectedRange={selectedRange}
          onSelectRange={setSelectedRange}
        />

        {/* Core Flow Progression Breadcrumb */}
        <CoreFlowBar
          activeStep={activeFlowStep}
          onStepClick={handleStepClick}
        />

        {/* 2. Weekly Summary */}
        <WeeklySummary onJumpToSection={handleJumpToSection} />

        {/* 3. What Changed? Sparklines */}
        <WhatChangedSparklines />

        {/* 4. Meaningful Insight Cards */}
        <MeaningfulInsightCards
          onExplorePattern={() => handleJumpToSection("insight-evolution")}
          onToast={showToast}
        />

        {/* 5. Something You Might Have Missed */}
        <HiddenPatternMissed onReflect={openReflection} />

        {/* 6. Evidence Panel */}
        <EvidencePanel />

        {/* 7 & 8. Emerging Patterns + Positive Patterns (Grid) */}
        <div className="patterns-split-grid">
          <EmergingPatterns onToast={showToast} />
          <PositivePatterns />
        </div>

        {/* 9. Unusual Pattern Day Comparison */}
        <UnusualPatternDay />

        {/* 10. Journal Themes Evolution */}
        <JournalThemesComparison />

        {/* 11. Pattern Story */}
        <PatternStory />

        {/* 12. Signature Feature: Insight Evolution */}
        <InsightEvolution />

        {/* 13. Back Toward Baseline */}
        <BackTowardBaseline />

        {/* 14. Pattern Experiments */}
        <PatternExperiments onToast={showToast} />

        {/* 15. Experiment Results */}
        <ExperimentResults />

        {/* 17. Insight Feedback Section */}
        <InsightFeedbackSection onToast={showToast} />
      </div>

      {/* 16. Reflection Connection Modal */}
      <ReflectionModal
        isOpen={reflectionModal.isOpen}
        topic={reflectionModal.topic}
        onClose={closeReflection}
        onSave={handleSaveReflection}
      />
    </div>
  );
}
