import React from 'react';

const ToggleButtons = ({ onClick }) => {
  return (
    <div className="text-center py-6">
      <button
        onClick={() => onClick('skills')}
        className={`px-6 py-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all duration-300 mx-2`}
      >
        Show Skills
      </button>
      <button
        onClick={() => onClick('roadmap')}
        className={`px-6 py-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all duration-300 mx-2`}
      >
        Show Learning Roadmap
      </button>
    </div>
  );
};

export default ToggleButtons;
