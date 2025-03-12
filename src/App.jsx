import React, { useState, useEffect } from 'react';
import { getProjects } from './controllers/projectController';
import TextoProject from './views/textoProject';
import { FaReact, FaPhp, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab, FaLinux, FaBootstrap, FaTerminal } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMysql, SiSqlite, SiCodeigniter, SiAngular, SiPostman, SiInsomnia, SiTailwindcss } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import SkillIcon from './views/SkillIcon';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchedProjects = getProjects();
    setProjects(fetchedProjects);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skillSections = [
    {
      title: "Languages",
      skills: [
        { icon: <FaPhp />, name: "PHP", experience: "6 months" },
        { icon: <SiJavascript />, name: "JavaScript", experience: "2 years" },
        { icon: <FaJava />, name: "Java", experience: "2 years" },
        { icon: <SiTypescript />, name: "TypeScript", experience: "6 months" },
        { icon: <FaHtml5 />, name: "HTML", experience: "2 years" },
        { icon: <FaCss3Alt />, name: "CSS", experience: "2 years" },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { icon: <SiCodeigniter />, name: "CodeIgniter", experience: "1 year" },
        { icon: <FaReact />, name: "React", experience: "1 year" },
        { icon: <SiAngular />, name: "Angular", experience: "1 year" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL", experience: "6 months" },
        { icon: <SiSqlite />, name: "SQLite", experience: "6 months" },
      ]
    },
    {
      title: "Tools & Utilities",
      skills: [
        { icon: <FaBootstrap />, name: "Bootstrap", experience: "6 months" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", experience: "6 months" },
        { icon: <BiLogoVisualStudio />, name: "VS Code", experience: "2 years" },
        { icon: <FaGitAlt />, name: "Git", experience: "2 years" },
        { icon: <FaGithub />, name: "GitHub", experience: "2 years" },
        { icon: <FaGitlab />, name: "GitLab", experience: "2 years" },
        { icon: <FaLinux />, name: "Linux", experience: "1 year" },
        { icon: <FaTerminal />, name: "Terminal", experience: "1 year" },
        { icon: <SiPostman />, name: "Postman", experience: "6 months" },
        { icon: <SiInsomnia />, name: "Insomnia", experience: "6 months" }
      ]
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <button 
        onClick={toggleDarkMode} 
        className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
          ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-200'}"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
      <div className="container mx-auto max-w-6xl">
        <h1 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Mi Portafolio
        </h1>
        
        {/* About Me Section */}
        <div className="mb-16">
          <TextoProject darkMode={darkMode} />
        </div>

        {/* Skills Section */}
        <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          My Skills
        </h2>
        <div className="container mx-auto max-w-3xl">
          {skillSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {section.title}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 gap-y-6 justify-items-center items-center px-4">
                {section.skills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} darkMode={darkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
