import { useState, useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";
import "./Journal.css";

const PROMPT_CHIPS = [
  { label: "Release expectation", prompt: "What tension or expectation can I release right now?" },
  { label: "Moments of calm", prompt: "What part of today gave me a genuine sense of calm or focus?" },
  { label: "Energy connection", prompt: "How did my sleep and physical energy shape my emotional reactions today?" },
  { label: "Mental bandwidth", prompt: "What has been taking most of my mental space lately?" },
  { label: "Gratitude pulse", prompt: "What tiny win or unexpected kindness happened today?" },
];

const AVAILABLE_TAGS = [
  "Apprehensive",
  "Reframing",
  "Grounded",
  "Boundaries",
  "Peaceful",
  "AcademicWorkload",
  "FlowState",
  "RestNeeded",
];

const DEFAULT_ENTRIES = [
  {
    id: "entry-1",
    date: "Yesterday, 9:15 PM",
    category: "Evening Decompression",
    title: "Unpacking project milestone tension",
    body: "Stepped away from the laptop at 8:30 PM. The initial tight chest feeling about unfinished slides eased up once I mapped out tomorrow's top two focus blocks. Replaced rumination with a quiet cup of chamomile.",
    tags: ["Apprehensive", "Reframing", "Grounded"],
  },
  {
    id: "entry-2",
    date: "Sunday, 8:40 PM",
    category: "Weekly Rebalance",
    title: "Quiet Sunday morning walk in the park",
    body: "Realized how much the continuous notifications from the group chat were draining my morning focus. Setting the phone to 'Do Not Disturb' until 11 AM gave me back 2 uninterrupted hours of reading.",
    tags: ["Boundaries", "Peaceful"],
  },
  {
    id: "entry-3",
    date: "25 Sep, 10:20 PM",
    category: "Academic Reflection",
    title: "Lab assignment completion & mental reset",
    body: "Finally submitted the algorithms coursework. The sleep deficit from Tuesday was definitely showing in my afternoon patience levels, but a 20-minute power nap helped reset my outlook before the team sync.",
    tags: ["AcademicWorkload", "RestNeeded"],
  },
];

function Journal({ onReturnToDashboard }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedTags, setSelectedTags] = useState(["Grounded"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [successToast, setSuccessToast] = useState("");

  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem("moodmatrix_journal_entries");
      return saved ? JSON.parse(saved) : DEFAULT_ENTRIES;
    } catch {
      return DEFAULT_ENTRIES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("moodmatrix_journal_entries", JSON.stringify(entries));
    } catch {
      // storage unavailable
    }
  }, [entries]);

  const handleSelectPrompt = (promptText) => {
    if (!body) {
      setBody(promptText + "\n\n");
    } else {
      setBody((prev) => prev.trim() + "\n\n" + promptText + "\n");
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.trim()) {
      return;
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newEntry = {
      id: `entry-${Date.now()}`,
      date: `Today, ${timeStr}`,
      category: "Personal Reflection",
      title: title.trim() || "Evening Reflection",
      body: body.trim(),
      tags: selectedTags.length ? selectedTags : ["Grounded"],
    };

    setEntries([newEntry, ...entries]);
    setTitle("");
    setBody("");
    setSuccessToast("Reflection saved and integrated into your patterns.");

    setTimeout(() => {
      setSuccessToast("");
    }, 4500);
  };

  const handleDeleteEntry = (id) => {
    setEntries((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredEntries = entries.filter((entry) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      entry.title.toLowerCase().includes(q) ||
      entry.body.toLowerCase().includes(q) ||
      entry.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0;

  return (
    <div className="journal-container">
      {/* HEADER */}
      <div className="journal-header-row">
        <div>
          <span className="badge-tag">SAFE & PRIVATE SPACE</span>
          <h1 className="card-title" style={{ fontSize: "28px", marginTop: "4px" }}>
            Reflection Journal
          </h1>
          <p className="card-subtitle">
            Private, unjudged space to slow down and put thoughts into structured clarity.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {onReturnToDashboard && (
            <button
              type="button"
              className="btn-secondary"
              onClick={onReturnToDashboard}
            >
              <ArrowLeft size={15} />
              <span>Back to Dashboard</span>
            </button>
          )}
        </div>
      </div>

      {successToast && (
        <div className="toast-banner">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle2 size={18} />
            <span>{successToast}</span>
          </div>
          {onReturnToDashboard && (
            <button
              type="button"
              onClick={onReturnToDashboard}
              style={{
                background: "transparent",
                border: "none",
                color: "#065f46",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "12px",
              }}
            >
              Back to Dashboard →
            </button>
          )}
        </div>
      )}

      <div className="journal-layout-grid">
        {/* NEW ENTRY FORM */}
        <div className="journal-card">
          <div className="checkin-card-header">
            <span className="badge-tag">NEW ENTRY</span>
            <h2 className="card-title">Capture Current Thoughts</h2>
            <p className="card-subtitle">
              Write freely. Notice without self-criticism what surfaces.
            </p>
          </div>

          {/* Guided Prompts */}
          <div className="prompts-container">
            <div className="prompts-label">Tap a guided prompt to jumpstart:</div>
            <div className="prompts-pill-row">
              {PROMPT_CHIPS.map((chip) => (
                <button
                  type="button"
                  key={chip.label}
                  className="prompt-chip"
                  onClick={() => handleSelectPrompt(chip.prompt)}
                  title={chip.prompt}
                >
                  + {chip.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="journal-title-input"
              placeholder="Entry Title (e.g. Decompressing after project deadline)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="journal-textarea"
              placeholder="What happened today? What thoughts or sensations are asking for your attention?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />

            {/* Tag Selection */}
            <div className="journal-tags-selection">
              <span className="tag-label">Themes & Tags:</span>
              <div className="journal-tags-row">
                {AVAILABLE_TAGS.map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  return (
                    <button
                      type="button"
                      key={tag}
                      className={`journal-tag-btn ${isActive ? "active" : ""}`}
                      onClick={() => toggleTag(tag)}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="editor-footer">
              <span className="char-counter">
                {body.length} characters · {wordCount} words
              </span>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setTitle("");
                    setBody("");
                  }}
                  disabled={!body && !title}
                >
                  <RotateCcw size={14} />
                  <span>Clear</span>
                </button>

                <button type="submit" className="btn-primary" disabled={!body.trim()}>
                  <Sparkles size={16} />
                  <span>Save Reflection</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* SIDEBAR TIPS & STATS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="journal-card">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <BookOpen size={18} color="var(--green, #268c70)" />
              <h3 className="card-title" style={{ fontSize: "16px" }}>
                Reflection Insights
              </h3>
            </div>

            <div style={{ fontSize: "13px", color: "var(--text-soft, #66808a)", lineHeight: "1.6" }}>
              You've logged <strong>{entries.length}</strong> reflections this month.
              Writing 3-5 minutes unburdens your working memory and reveals subtle triggers.
            </div>

            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                borderRadius: "10px",
                background: "#f7faf9",
                border: "1px solid #e2ebe7",
                fontSize: "12px",
                color: "var(--green-dark, #176653)",
              }}
            >
              💡 <strong>Tip:</strong> Re-reading past entries on calmer days helps build compassionate self-awareness.
            </div>
          </div>
        </div>
      </div>

      {/* PAST REFLECTIONS */}
      <div style={{ marginTop: "12px" }}>
        <div className="past-entries-header">
          <div>
            <h2 className="card-title" style={{ fontSize: "20px" }}>
              Previous Reflections
            </h2>
            <p className="card-subtitle">
              Your historical trail of thoughts, feelings, and personal discoveries.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search reflections or #tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <Search
              size={14}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-soft, #66808a)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <div
            className="journal-card"
            style={{ textAlign: "center", padding: "40px 20px" }}
          >
            <p style={{ color: "var(--text-soft, #66808a)", fontSize: "14px" }}>
              No reflection entries match your search.
            </p>
          </div>
        ) : (
          <div className="past-entries-grid">
            {filteredEntries.map((item) => (
              <article key={item.id} className="entry-card">
                <div className="entry-meta-row">
                  <span className="entry-date">{item.date}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="entry-tag-pill">{item.category}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteEntry(item.id)}
                      title="Delete reflection"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#9ca3af",
                        cursor: "pointer",
                        padding: "2px",
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <h3 className="entry-title">{item.title}</h3>

                <p className="entry-snippet">{item.body}</p>

                {item.tags && item.tags.length > 0 && (
                  <div className="entry-tags-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="mini-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
