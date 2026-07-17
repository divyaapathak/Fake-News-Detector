import { FaRobot, FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Detection",
    desc: "Advanced AI analyzes articles and detects misinformation with high accuracy."
  },
  {
    icon: <FaBolt />,
    title: "Fast Results",
    desc: "Analyze news within seconds using our intelligent prediction engine."
  },
  {
    icon: <FaChartLine />,
    title: "Confidence Score",
    desc: "Every prediction includes a confidence percentage and explanation."
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Analysis",
    desc: "Designed to help users verify information from reliable sources."
  }
];

export default function Features() {
  return (
    <section className="features">

      <h2>Why Choose FakeNews AI?</h2>

      <div className="feature-grid">

        {features.map((item, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}