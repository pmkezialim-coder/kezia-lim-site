export default function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-label="BECOME product interface illustration">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-field-note hero-note-one">
        <span>01</span>Find the human need
      </div>
      <div className="hero-field-note hero-note-two">
        <span>03</span>Ship. Learn. Improve.
      </div>

      <div className="hero-phone hero-phone-back" aria-hidden="true">
        <div className="hero-phone-screen">
          <p>BECOME</p>
          <div className="hero-mini-label">Emerging pattern</div>
          <h3>You choose courage even before certainty arrives.</h3>
          <div className="hero-pattern-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="hero-phone hero-phone-front" aria-hidden="true">
        <div className="hero-phone-screen hero-journal-screen">
          <p>BECOME</p>
          <span className="hero-mini-label">Thursday, 16 July</span>
          <h3>What felt true today?</h3>
          <div className="hero-journal-entry">
            I spoke up with reasons. I felt braver, clearer, and fully
            myself.
          </div>
          <div className="hero-ai-reflection">
            <span>AI reflection</span>
            Your confidence is becoming a practice, not a performance.
          </div>
        </div>
      </div>
    </div>
  );
}
