import React from 'react';

const SkillIcon = ({ skill, darkMode }) => {
  return (
    <div className="relative group my-2">
      <div className={`text-4xl p-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center
        ${darkMode ? 'text-white/70 hover:text-white hover:bg-gray-700' : 'text-gray-800/70 hover:text-gray-800 hover:bg-gray-100'}`}>
        {skill.icon}
      </div>
      
      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
        ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
        <p className="font-medium text-sm">{skill.name}</p>
        <p className="text-xs">{skill.experience}</p>
      </div>
    </div>
  );
};

export default SkillIcon;