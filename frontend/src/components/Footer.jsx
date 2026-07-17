import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>FakeNews AI</h2>

      <p>
        AI Powered Fake News Detection Platform
      </p>

      <div className="footer-icons">

        <FaGithub />

        <FaLinkedin />

        <FaEnvelope />

      </div>

      <p className="copyright">
        © 2026 FakeNews AI. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;