import React, { useState, useEffect } from 'react';
import { getProjects } from './controllers/projectController';
import TextoProject from './views/textoProject';
import { FaReact, FaPhp, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab, FaLinux, FaBootstrap, FaTerminal } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMysql, SiSqlite, SiCodeigniter, SiAngular, SiPostman, SiInsomnia, SiTailwindcss } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import SkillIcon from './views/SkillIcon';
import { useAppContext } from './components/context/AppContext';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { motion } from "framer-motion";

const App = () => {
    const {
      darkMode,
      toggleDarkMode,
      language,
      toggleLanguage
    } = useAppContext();

  const translations = {
    en: {
      portfolio: "My Portfolio",
      skills: "My Skills",
      projects: "My Projects",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      tools: "Tools & Utilities",
      calculatorTitle: "Calculator Aesthetic",
      calculatorDesc: "A modern and aesthetic calculator web application with a beautiful user interface and smooth functionality.",
      tapazoTitle: "Tapazo",
      tapazoDesc: "An innovative web application that showcases modern design principles and interactive features.",
      triquiTitle: "Triqui Game",
      triquiDesc: "A classic Tic-tac-toe game with a modern twist, featuring an engaging user interface and smooth gameplay.",
      viewProject: "View Project"
    },
    es: {
      portfolio: "Mi Portafolio",
      skills: "Mis Habilidades",
      projects: "Mis Proyectos",
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de Datos",
      tools: "Herramientas y Utilidades",
      calculatorTitle: "Calculadora Estética",
      calculatorDesc: "Una aplicación web de calculadora moderna y estética con una hermosa interfaz de usuario y funcionalidad fluida.",
      tapazoTitle: "Tapazo",
      tapazoDesc: "Una aplicación web innovadora que muestra principios de diseño moderno y características interactivas.",
      triquiTitle: "Juego Triqui",
      triquiDesc: "Un juego clásico de tres en raya con un toque moderno, con una interfaz de usuario atractiva y un juego fluido.",
      viewProject: "Ver Proyecto"
    }
  };

  const t = translations[language];

  const skillSections = [
    {
      title: t.languages,
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
      title: t.frameworks,
      skills: [
        { icon: <SiCodeigniter />, name: "CodeIgniter", experience: "1 year" },
        { icon: <FaReact />, name: "React", experience: "1 year" },
        { icon: <SiAngular />, name: "Angular", experience: "1 year" },
      ]
    },
    {
      title: t.databases,
      skills: [
        { icon: <SiMysql />, name: "MySQL", experience: "6 months" },
        { icon: <SiSqlite />, name: "SQLite", experience: "6 months" },
      ]
    },
    {
      title: t.tools,
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
      <div className="fixed top-4 left-0 right-0 px-4 flex justify-between transition-opacity duration-300">
        <button 
          onClick={toggleLanguage} 
          className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
            ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {language === 'en' ? '🌐 ES' : '🌐 EN'}
        </button>
        <button 
          onClick={toggleDarkMode} 
          className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
            ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <div className="container mx-auto max-w-6xl">
        <h1 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {t.portfolio}
        </h1>
        
        {/* About Me Section */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <TextoProject darkMode={darkMode} language={language} />
        </motion.div>

        {/* Skills Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t.skills}
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
        </motion.div>

        {/* Projects Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t.projects}
          </h2>
          <div className="container mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <img className="w-full h-48 object-cover" src="https://portafolio-web-oiao.vercel.app/img-proyectos/calculadora-project.png" alt="Calculator Project" />
              <CardContent>
                <CardTitle>{t.calculatorTitle}</CardTitle>
                <CardDescription>{t.calculatorDesc}</CardDescription>
                <Button asChild className="mt-4">
                  <a href="https://calculator-aesthetic.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t.viewProject}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <img className="w-full h-48 object-cover" src="https://portafolio-web-oiao.vercel.app/img-proyectos/tapazo-img.png" alt="Tapazo Project" />
              <CardContent>
                <CardTitle>{t.tapazoTitle}</CardTitle>
                <CardDescription>{t.tapazoDesc}</CardDescription>
                <Button asChild className="mt-4">
                  <a href="https://tapazo-indol.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t.viewProject}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <img className="w-full h-48 object-cover" src="https://portafolio-web-oiao.vercel.app/img-proyectos/triqui-img.png" alt="Triqui Game" />
              <CardContent>
                <CardTitle>{t.triquiTitle}</CardTitle>
                <CardDescription>{t.triquiDesc}</CardDescription>
                <Button asChild className="mt-4">
                  <a href="https://triqui-ink.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t.viewProject}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
