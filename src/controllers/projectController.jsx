
// src/controllers/ProjectController.js
import imgDashboard from '../assets/proyectos/ticket/imgDashboard.png';
import imgPQRS from '../assets/proyectos/ticket/imgPQRS.png';
import ProjectModel from '../models/projectModel';

export const getProjects = () => {
  const projects = [
    new ProjectModel(1, 'DashBoard', 'Refactorizar el inicio de la pagina renderizando el nombre del cliente que inicia sesión, tambien un tipo de paleta de opciones con animación.', 'FrontEnd - Refactor', imgDashboard, 'p/dashboard/merge-n!149'),
    new ProjectModel(2, 'PQRS main', 'Agreagar modulo de centro de soluciones funcional para agentes de soportes y clientes, renderizar todos los tickets generados por los clientes y un proceso de asignacion para los agentes', 'FullStack - Feat', imgPQRS, '/'),
  ];

  return projects;
};

//se exporta la función getProjects que retorna un array de objetos de la clase ProjectModel con los datos de los proyectos.
//models/ProjectModel.js
