
// src/controllers/ProjectController.js

import ProjectModel from '../models/projectModel';

export const getProjects = () => {
  const projects = [
    new ProjectModel(1, 'Proyecto 1', 'Descripción del proyecto 1', '/path/to/image1.jpg', 'http://linkalproyecto1.com'),
    new ProjectModel(2, 'Proyecto 2', 'Descripción del proyecto 2', '/path/to/image2.jpg', 'http://linkalproyecto2.com'),
  ];

  return projects;
};

//se exporta la función getProjects que retorna un array de objetos de la clase ProjectModel con los datos de los proyectos.
//models/ProjectModel.js
