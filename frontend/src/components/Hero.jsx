import { Link } from "react-router-dom";
import { FaRobot, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          <FaShieldAlt />
          AI Powered News Verification
        </span>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          Detect Fake News
          <br />

          <span>With AI Intelligence</span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >
          Analyze news articles instantly and discover
          whether information is real or fake using
          Artificial Intelligence with confidence scoring.
        </motion.p>

        <div className="hero-buttons">

          <Link className="primary-btn" to="/analyzer">
            Analyze News
            <FaArrowRight />
          </Link>

          <Link className="secondary-btn" to="/register">
            Get Started
          </Link>

        </div>

        <div className="hero-stats">

          <div>
            <h3>98%</h3>
            <p>Accuracy</p>
          </div>

          <div>
            <h3>50K+</h3>
            <p>Articles</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Available</p>
          </div>

        </div>

      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [-12, 12, -12] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
      >

        <div className="ai-box">

          <FaRobot className="robot"/>

          <h2>AI Analysis</h2>

          <div className="progress">

            <div className="progress-fill"></div>

          </div>

          <h3>96% Confidence</h3>

          <p className="real-news">
            ✔ REAL NEWS
          </p>

          <div className="mini-card">
            AI detected reliable sources
          </div>

        </div>

      </motion.div>

      <div className="circle1"></div>
      <div className="circle2"></div>

    </section>
  );
}