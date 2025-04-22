import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillBars from './components/SkillBars';
import Projects from './components/Projects';
import LearningRoadmap from './components/LearningRoadmap';
import Skills from './components/Skills'; // Import Skills component
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [activeComponent, setActiveComponent] = useState('skills');

  // Function to change the active component
  const toggleComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <DarkModeToggle />
      <Header />
      <Hero />

      {/* Button Section with Professional Look */}
      <div className="flex justify-center items-center py-10 space-x-6">
        <button
          onClick={() => toggleComponent('skills')}
          className={`px-6 py-3 rounded-md text-lg font-medium transition-all duration-300
            ${activeComponent === 'skills' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'} 
            hover:scale-105`}
        >
          Skills
        </button>

        <button
          onClick={() => toggleComponent('skillbars')}
          className={`px-6 py-3 rounded-md text-lg font-medium transition-all duration-300
            ${activeComponent === 'skillbars' ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-green-100'} 
            hover:scale-105`}
        >
          Skill Bars
        </button>

        <button
          onClick={() => toggleComponent('learningRoadmap')}
          className={`px-6 py-3 rounded-md text-lg font-medium transition-all duration-300
            ${activeComponent === 'learningRoadmap' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-purple-100'} 
            hover:scale-105`}
        >
          Learning Roadmap
        </button>
      </div>

      {/* Component Section */}
      <div className="relative">
        {/* Conditional rendering based on activeComponent state */}
        {activeComponent === 'skills' && <div><Skills /></div>}
        {activeComponent === 'skillbars' && <div><SkillBars /></div>}
        {activeComponent === 'learningRoadmap' && <div><LearningRoadmap /></div>}
      </div>

      <Projects />
      <Certificates/>
      <Contact/>
    </div>
  );
}

export default App;
