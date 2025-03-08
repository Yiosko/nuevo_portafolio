// src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={project.imageUrl} alt={project.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{project.title}</h2>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={project.url} className="text-indigo-600">Ver más</a>
      </div>
    </div>
  );
};

export default ProjectCard;