import { ArrowRight, Sparkles } from "lucide-react";

export default function CoreFlowBar({ activeStep = "INSIGHT", onStepClick }) {
  const steps = [
    { id: "DATA", label: "Data", desc: "Voluntary logs" },
    { id: "CHANGE", label: "Change", desc: "Baseline shifts" },
    { id: "PATTERN", label: "Pattern", desc: "Recurring rhythms" },
    { id: "EVIDENCE", label: "Evidence", desc: "Signal strength" },
    { id: "INSIGHT", label: "Insight", desc: "Synthesized meaning" },
    { id: "EXPERIMENT", label: "Experiment", desc: "3-day trials" },
    { id: "NEW DATA", label: "New Data", desc: "Observed shifts" },
    { id: "EVOLVING INSIGHT", label: "Evolving Insight", desc: "Week-by-week" },
  ];

  return (
    <div className="core-flow-bar">
      <span className="core-flow-label">
        <Sparkles size={12} style={{ display: "inline", marginRight: 4, color: "#176653" }} />
        Reflectra Pattern Engine
      </span>

      {steps.map((step, idx) => (
        <div key={step.id} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <button
            type="button"
            className={`flow-step ${activeStep === step.id ? "active" : ""}`}
            onClick={() => onStepClick && onStepClick(step.id)}
            title={step.desc}
            style={{ cursor: "pointer", border: "none" }}
          >
            <span>{step.label}</span>
          </button>
          {idx < steps.length - 1 && <span className="flow-arrow"><ArrowRight size={11} /></span>}
        </div>
      ))}
    </div>
  );
}
