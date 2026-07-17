import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import ConfidenceBar from "./ConfidenceBar";

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-card">

      {result.label === "REAL NEWS" ? (
        <FaCheckCircle className="result-icon real" />
      ) : (
        <FaTimesCircle className="result-icon fake" />
      )}

      <h2>{result.label}</h2>

      <ConfidenceBar confidence={result.confidence} />

      <div className="result-box">
        <h4>Explanation</h4>

        <p>{result.explanation}</p>
      </div>

    </div>
  );
};

export default ResultCard;