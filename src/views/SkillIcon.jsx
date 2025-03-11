import React from 'react';

const SkillIcon = ({ skill, darkMode }) => {
  return (
    <div className="relative group">
      <div className={`text-4xl p-4 rounded-lg transition-all duration-300 ease-in-out
        ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>
        {skill.icon}
      </div>
      
      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
        ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
        <p className="font-medium">{skill.name}</p>
        <p className="text-sm">{skill.experience}</p>
      </div>
    </div>
  );
};

export default SkillIcon;