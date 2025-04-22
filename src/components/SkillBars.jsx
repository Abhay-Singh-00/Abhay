import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'SQL/DBMS', level: 75 },
  { name: 'Spring Boot', level: 65 },
];

export default function SkillBars() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg text-gray-700 font-medium">{skill.name}</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
