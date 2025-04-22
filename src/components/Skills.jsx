import React from 'react';
import { FaReact, FaJava, FaNode, FaDatabase } from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-12">My Technical Skills</h2>
      <div className="flex justify-center gap-12">
        {/* Skill Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg w-48 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <FaReact className="text-5xl text-indigo-600 mx-auto" />
          <p className="mt-4 font-semibold text-lg">React.js</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg w-48 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <FaJava className="text-5xl text-orange-500 mx-auto" />
          <p className="mt-4 font-semibold text-lg">Java</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg w-48 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <FaNode className="text-5xl text-green-600 mx-auto" />
          <p className="mt-4 font-semibold text-lg">Node.js</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg w-48 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <FaDatabase className="text-5xl text-blue-500 mx-auto" />
          <p className="mt-4 font-semibold text-lg">SQL/DBMS</p>
        </div>
      </div>
    </section>
  );
}
