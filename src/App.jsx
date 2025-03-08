// src/App.jsx

import React, { useState, useEffect } from 'react';
import { getProjects } from './controllers/projectController';
import ProjectCard from './views/projectCard';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = getProjects();  // Esto podría ser una llamada a un controlador o servicio
    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Mi Portafolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;
