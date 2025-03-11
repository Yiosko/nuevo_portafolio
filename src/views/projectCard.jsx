// src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="px-6 py-4 text-center">
        <h2 className="font-bold text-xl mb-3">{project.title}</h2>
        <p className="text-gray-700 text-base mb-4">{project.description}</p>
        <div className="space-y-2">
          {project.technologies && project.technologies.map((tech, index) => (
            <div key={index} className="flex items-center justify-between px-4">
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              <span className="text-sm font-medium text-gray-600">{tech.experience}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;