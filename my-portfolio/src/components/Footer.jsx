import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/leeanto" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/kaleeanto" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.leeantoantony88@gmail.com">
            <SiGmail />
            <span>Email</span>
          </a>
          <a href="/leeantoresume.pdf" download>
            <FaFileDownload />
            <span>Resume</span>
          </a>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} KA Leeanto. Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}