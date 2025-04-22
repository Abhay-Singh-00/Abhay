// src/components/LearningTree.jsx
import React from 'react';
import { FaReact, FaJava, FaDatabase, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot } from 'react-icons/si';

const skills = [
  {
    label: 'Web Development',
    icon: <FaReact />,
    subSkills: [
      { label: 'React.js', icon: <FaReact /> },
      { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    label: 'Backend Development',
    icon: <FaJava />,
    subSkills: [
      { label: 'Java', icon: <FaJava /> },
      { label: 'Spring Boot', icon: <SiSpringboot /> },
      { label: 'Node.js', icon: <FaNode /> },
    ],
  },
  {
    label: 'Databases',
    icon: <FaDatabase />,
    subSkills: [
      { label: 'SQL', icon: <FaDatabase /> },
      { label: 'DBMS', icon: <FaDatabase /> },
    ],
  },
];

export default function LearningTree() {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-indigo-100 py-16 text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-10">My Learning Tree 🌱</h2>
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-80 w-80" viewBox="0 0 100 100">
          <circle cx="50" cy="20" r="10" fill="purple" className="transition-transform hover:scale-110" />
          <text x="50" y="20" textAnchor="middle" stroke="#fff" strokeWidth="1px" dy=".3em" className="font-bold text-white">Web Dev</text>
          {skills.map((skill, idx) => (
            <g key={idx}>
              {/* Main branch */}
              <line x1="50" y1="30" x2={30 + 20 * idx} y2="50" stroke="purple" strokeWidth="2" />
              {/* Sub-skills */}
              <circle cx={30 + 20 * idx} cy="50" r="8" fill="purple" className="transition-transform hover:scale-110" />
              <text x={30 + 20 * idx} y="50" textAnchor="middle" stroke="#fff" strokeWidth="1px" dy=".3em" className="font-semibold text-white">{skill.label}</text>
              {skill.subSkills.map((subSkill, subIdx) => (
                <g key={subIdx}>
                  <line
                    x1={30 + 20 * idx} y1="50" 
                    x2={50 + subIdx * 15} y2="70" 
                    stroke="purple" strokeWidth="2" />
                  <circle cx={50 + subIdx * 15} cy="70" r="6" fill="purple" className="transition-transform hover:scale-110" />
                  <text
                    x={50 + subIdx * 15} y="70" 
                    textAnchor="middle" 
                    stroke="#fff" strokeWidth="1px" 
                    dy=".3em" className="font-semibold text-white"
                  >
                    {subSkill.label}
                  </text>
                </g>
              ))}
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
