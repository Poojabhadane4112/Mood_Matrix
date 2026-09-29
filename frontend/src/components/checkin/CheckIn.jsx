import { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckIn.css";

function CheckIn() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [energy, setEnergy] = useState("");
  const [dayFeeling, setDayFeeling] = useState("");
  const [topic, setTopic] = useState("");
  const [reflection, setReflection] = useState("");

  const getFollowUp = () => {
    const text = message.toLowerCase();

    if (
      text.includes("study") ||
      text.includes("college") ||
      text.includes("assignment") ||
      text.includes("exam") ||
      text.includes("project")
    ) {
      return "Sounds like your studies have been part of your day. What was that experience like for you?";
    }

    if (
      text.includes("tired") ||
      text.includes("exhausted") ||
      text.includes("sleep")
    ) {
      return "It sounds like your energy may have been a part of today. How was your energy overall?";
    }

    if (
      text.includes("friend") ||
      text.includes("family") ||
      text.includes("alone")
    ) {
      return "It sounds like the people around you were part of today's experience. How did that affect your day?";
    }

    return "Thanks for sharing that. What stands out to you most about today?";
  };

  const handleContinue = () => {
    if (step === 1 && message.trim()) {
      setStep(2);
    } else if (step === 2 && energy) {
      setStep(3);
    } else if (step === 3 && dayFeeling) {
      setStep(4);
    } else if (step === 4 && topic) {
      setStep(5);
    } else if (step === 5) {
      saveCheckIn();
    }
  };

  const saveCheckIn = () => {
    const checkIn = {
      id: Date.now(),
      date: new Date().toISOString(),
      message,
      energy,
      dayFeeling,
      topic,
      reflection,
    };

    const existingCheckIns =
      JSON.parse(localStorage.getItem("moodMatrixCheckIns")) || [];

    localStorage.setItem(
      "moodMatrixCheckIns",
      JSON.stringify([...existingCheckIns, checkIn])
    );

    setStep(6);
  };

  const resetCheckIn = () => {
    setStep(1);
    setMessage("");
    setEnergy("");
    setDayFeeling("");
    setTopic("");
    setReflection("");
  };

  return (
    <div className="checkin-page">
      <div className="checkin-container">
        <Link className="checkin-back" to="/">
          Back to Dashboard
        </Link>

        {/* Progress */}
        {step < 6 && (
          <div className="checkin-progress">
            <span>Check-in</span>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${((step - 1) / 4) * 100}%`,
                }}
              ></div>
            </div>

            <span>{step}/5</span>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="conversation-card fade-in">
            <div className="small-label">A MOMENT FOR YOU</div>

            <h1>Take a moment.</h1>

            <p className="question">
              What’s been going on?
            </p>

            <p className="helper-text">
              You can tell us a little or a lot. There’s no right answer.
            </p>

            <textarea
              className="checkin-textarea"
              placeholder="Write whatever feels natural..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="continue-button"
              disabled={!message.trim()}
              onClick={handleContinue}
            >
              Continue →
            </button>

            <p className="privacy-note">
              Your reflection stays under your control.
            </p>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="conversation-card fade-in">
            <div className="small-label">A LITTLE DEEPER</div>

            <h2>{getFollowUp()}</h2>

            <p className="helper-text">
              Choose what feels closest. You can always skip a question later.
            </p>

            <div className="choice-grid">
              {["Low", "A little low", "Okay", "Good", "Full of energy"].map(
                (option) => (
                  <button
                    key={option}
                    className={`choice-button ${
                      energy === option ? "selected" : ""
                    }`}
                    onClick={() => setEnergy(option)}
                  >
                    {option}
                  </button>
                )
              )}
            </div>

            <button
              className="continue-button"
              disabled={!energy}
              onClick={handleContinue}
            >
              Continue →
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="conversation-card fade-in">
            <div className="small-label">LOOKING BACK</div>

            <h2>And how did the day feel overall?</h2>

            <div className="choice-grid">
              {["Heavy", "A bit difficult", "Mixed", "Mostly okay", "Light"].map(
                (option) => (
                  <button
                    key={option}
                    className={`choice-button ${
                      dayFeeling === option ? "selected" : ""
                    }`}
                    onClick={() => setDayFeeling(option)}
                  >
                    {option}
                  </button>
                )
              )}
            </div>

            <button
              className="continue-button"
              disabled={!dayFeeling}
              onClick={handleContinue}
            >
              Continue →
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="conversation-card fade-in">
            <div className="small-label">YOUR DAY</div>

            <h2>Was anything in particular shaping your day?</h2>

            <p className="helper-text">
              Pick whatever feels relevant.
            </p>

            <div className="topic-grid">
              {[
                "College",
                "Work",
                "Family",
                "Friends",
                "Sleep",
                "Routine",
                "Personal time",
                "Something else",
              ].map((option) => (
                <button
                  key={option}
                  className={`topic-button ${
                    topic === option ? "selected" : ""
                  }`}
                  onClick={() => setTopic(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="continue-button"
              disabled={!topic}
              onClick={handleContinue}
            >
              Continue →
            </button>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="conversation-card fade-in">
            <div className="small-label">BEFORE YOU GO</div>

            <h2>Anything you'd like to leave here?</h2>

            <p className="helper-text">
              This is completely optional. A thought, a small win, or simply
              something you want to remember.
            </p>

            <textarea
              className="checkin-textarea reflection-box"
              placeholder="Write something if you'd like..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />

            <button
              className="continue-button"
              onClick={handleContinue}
            >
              Save my check-in →
            </button>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="conversation-card completion-card fade-in">
            <div className="success-icon">✓</div>

            <h3>That’s enough for today.</h3>

            <p>
              Thanks for taking a moment to check in with yourself.
            </p>

            <p className="helper-text">
              Your reflection has been saved. You can come back whenever
              you'd like.
            </p>

            <button
              className="continue-button"
              onClick={resetCheckIn}
            >
              Start another check-in
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CheckIn;