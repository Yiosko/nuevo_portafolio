// src/services/apiService.js

export const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  const data = await response.json();
  return data;
};
