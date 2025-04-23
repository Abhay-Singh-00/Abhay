import React from 'react';
import {
  FaReact,
  FaJava,
  FaNode,
  FaDatabase,
  FaBootstrap,
  FaMobileAlt,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-5xl text-indigo-600 mx-auto" /> },
  { name: 'Java', icon: <FaJava className="text-5xl text-orange-500 mx-auto" /> },
  { name: 'Node.js', icon: <FaNode className="text-5xl text-green-600 mx-auto" /> },
  { name: 'SQL/DBMS', icon: <FaDatabase className="text-5xl text-blue-500 mx-auto" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-5xl text-purple-600 mx-auto" /> },
  { name: 'React Native', icon: <FaMobileAlt className="text-5xl text-pink-500 mx-auto" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-5xl text-green-700 mx-auto" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-5xl text-red-600 mx-auto" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-5xl text-blue-600 mx-auto" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl text-teal-500 mx-auto" /> },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-12">My Technical Skills</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-4 font-semibold text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
