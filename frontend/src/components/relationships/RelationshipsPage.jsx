import { useState } from "react";
import RelationshipsHeader from "./RelationshipsHeader";
import TimeAllocation from "./TimeAllocation";
import RoutineDrift from "./RoutineDrift";
import RelationshipGraph from "./RelationshipGraph";
import RelationshipDetail from "./RelationshipDetail";
import ScreenTimeAnalysis from "./ScreenTimeAnalysis";
import ContextSwitching from "./ContextSwitching";
import WorkloadRelationship from "./WorkloadRelationship";
import OtherRelationships from "./OtherRelationships";
import PersonalSuggestions from "./PersonalSuggestions";
import WhatIfExplorer from "./WhatIfExplorer";
import PersonalBaseline from "./PersonalBaseline";
import PatternTimeline from "./PatternTimeline";
import RelationshipSummary from "./RelationshipSummary";
import "./Relationships.css";

function RelationshipsPage({ onNavigateTab }) {
  const [selectedPair, setSelectedPair] = useState("Sleep ↔ Energy");
  const [activeNotice, setActiveNotice] = useState("");

  const showNotification = (msg) => {
    setActiveNotice(msg);
    setTimeout(() => {
      setActiveNotice("");
    }, 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relationships-page">
      {/* Toast banner */}
      {activeNotice && (
        <div className="toast-banner">
          <span>{activeNotice}</span>
          <button
            type="button"
            onClick={() => setActiveNotice("")}
            style={{ background: "transparent", border: "none", color: "#065f46", cursor: "pointer", fontWeight: "bold" }}
          >
            ✕
          </button>
        </div>
      )}

      {/* HEADER */}
      <RelationshipsHeader
        onExploreTimeline={() =>
          onNavigateTab ? onNavigateTab("timeline") : scrollToSection("timeline-section")
        }
      />

      {/* SECTION 1 — YOUR TIME */}
      <TimeAllocation />

      {/* SECTION 2 — ROUTINE DRIFT */}
      <RoutineDrift
        onViewTimeline={() =>
          onNavigateTab ? onNavigateTab("timeline") : scrollToSection("timeline-section")
        }
      />

      {/* SECTION 3 & 4 — OBSERVED RELATIONSHIPS (PRIMARY GRAPH & DETAIL) */}
      <section className="rel-card">
        <h2 className="rel-card-title">Observed Relationships</h2>
        <p className="rel-card-subtitle">
          Signals that have frequently appeared together in your recent data. Tap any connection or node to inspect the underlying distribution.
        </p>

        <div className="graph-and-detail-grid">
          <RelationshipGraph
            activePair={selectedPair}
            onSelectPair={(pair) => setSelectedPair(pair)}
          />

          <RelationshipDetail
            pair={selectedPair}
            onExplorePattern={() =>
              showNotification(`Detailed statistical view for "${selectedPair}" loaded into pattern cache.`)
            }
          />
        </div>
      </section>

      {/* SECTION 5 — SCREEN TIME RELATIONSHIPS */}
      <ScreenTimeAnalysis />

      {/* SECTION 6 — FOCUS & CONTEXT SWITCHING */}
      <ContextSwitching
        onTryFocusSession={() =>
          showNotification("Focus timer initiated. Suggested duration: 30 minutes.")
        }
      />

      {/* SECTION 7 — ACADEMIC / WORKLOAD RELATIONSHIP */}
      <WorkloadRelationship
        onExploreWorkload={() =>
          showNotification("Exam & project deadline clustering highlighted across recent days.")
        }
      />

      {/* SECTION 8 — OTHER RELATIONSHIPS */}
      <OtherRelationships
        onSelectPair={(pair) => {
          setSelectedPair(pair);
          scrollToSection("primary-graph");
        }}
      />

      {/* SECTION 9 — PERSONAL SUGGESTIONS */}
      <PersonalSuggestions />

      {/* SECTION 10 — WHAT-IF EXPLORER */}
      <WhatIfExplorer
        onExploreSchedule={() =>
          showNotification("Reallocated time schedule saved as a personal reference.")
        }
      />

      {/* SECTION 11 — PERSONAL BASELINE */}
      <PersonalBaseline
        onAdjustBaseline={() =>
          showNotification("Baseline recalculation settings opened.")
        }
      />

      {/* SECTION 12 — RECENT TIMELINE */}
      <div id="timeline-section">
        <PatternTimeline
          onSelectDay={(dayItem) =>
            showNotification(`Viewing observed signals for ${dayItem.day}: ${dayItem.label}`)
          }
        />
      </div>

      {/* BOTTOM SUMMARY */}
      <RelationshipSummary
        onExploreSleep={() => setSelectedPair("Sleep ↔ Energy")}
        onExploreScreenTime={() => setSelectedPair("Screen Time ↔ Sleep")}
        onExploreWorkload={() => setSelectedPair("Academic Workload ↔ Sleep")}
      />
    </div>
  );
}

export default RelationshipsPage;
