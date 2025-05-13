
import { 
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase 
  } from "react-icons/fa";
  import { SiMongodb, SiExpress } from "react-icons/si";
  
  import { skills } from "../data/portfolioData";
  
  const iconMap = {
    "HTML": <FaHtml5 />,
    "CSS": <FaCss3 />,
    "JavaScript": <FaJs />,
    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "MySQL": <FaDatabase />,
    "MongoDB": <SiMongodb />,
    "Express": <SiExpress />,
    "default": <FaDatabase />
  };
  
  export default function Skills() {
    return (
      <section id="skills" className="section">
        <h2 className="skillHead">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {iconMap[skill] || iconMap.default}
              </div>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }

  