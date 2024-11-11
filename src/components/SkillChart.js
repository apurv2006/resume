import React from 'react';
import { FaJava, FaPython, FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'; // Import Font Awesome icons

const skills = [
  { name: 'Java', icon: <FaJava />, years: '2 years' },
  { name: 'Python', icon: <FaPython />, years: '1 year' },
  { name: 'React', icon: <FaReact />, years: '1.5 years' },
  { name: 'CSS', icon: <FaCss3Alt />, years: '3 years' },
  { name: 'HTML', icon: <FaHtml5 />, years: '3 years' }
  // Add more skills as needed
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-info">
            <p className="skill-name">{skill.name}</p>
            <p className="skill-years">{skill.years}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
