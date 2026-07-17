const ConfidenceBar = ({ confidence }) => {
  let color = "#22c55e";

  if (confidence < 70) {
    color = "#ef4444";
  } else if (confidence < 90) {
    color = "#f59e0b";
  }

  return (
    <div className="confidence-container">
      <div className="confidence-header">
        <span>Confidence Score</span>
        <span>{confidence}%</span>
      </div>

      <div className="confidence-track">
        <div
          className="confidence-fill"
          style={{
            width: `${confidence}%`,
            background: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ConfidenceBar;