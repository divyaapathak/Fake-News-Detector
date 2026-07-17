const steps = [
  "Paste your news article",
  "AI analyzes the content",
  "Receive Fake or Real prediction"
];

export default function HowItWorks() {
  return (
    <section className="steps">

      <h2>How It Works</h2>

      <div className="step-grid">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <h3>{step}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}