import userImg from '../assets/userImg.webp';
import { FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa';

const TextoProject = ({ darkMode, language }) => {
  const translations = {
    en: {
      experience: "Professional Experience",
      position: "Fullstack Developer - TicketSoft",
      description: "Comprehensive fuel station management system with reliable hardware integration and web platform.",
      technologies: "Technologies: PHP, JavaScript, React, PHPStorm, Insomnia, MySQL, Node.js, Linux, GitLab, Terminal",
      achievements: [
        "Generation of new services for clients",
        "Page optimization and performance improvement",
        "Development of new functionalities for employees",
        "Integrations with external software (APIs)",
        "Effective resolution of bugs and technical issues"
      ]
    },
    es: {
      experience: "Experiencia Profesional",
      position: "Desarrollador Fullstack - TicketSoft",
      description: "Sistema integral de gestión de estaciones de combustible con integración confiable de hardware y plataforma web.",
      technologies: "Tecnologías: PHP, JavaScript, React, PHPStorm, Insomnia, MySQL, Node.js, Linux, GitLab, Terminal",
      achievements: [
        "Generación de nuevos servicios para los clientes",
        "Optimización de página y mejora de rendimiento",
        "Desarrollo de nuevas funcionalidades para empleados",
        "Integraciones con softwares externos (APIs)",
        "Resolución efectiva de bugs y problemas técnicos"
      ]
    }
  };

  const t = translations[language];
  return (
    <div className="space-y-8 ">
      {/* About Me Card */}
      <div className={`max-w-md mx-auto p-8 shadow-lg rounded-t-[6rem] ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out hover:shadow-xl`}>
        <div className='flex items-center m-auto'>
          <div>
            <p className='rotate-90'>Yiosko</p>
          </div>
          <img src={userImg} alt="DevIMG" className='text-justify' />
          <div className='flex flex-col '> { /* ICONOS */}
            <button className='p-4'>{<FaGithub size="2em"/>}</button>
            <button className='p-4'>{<FaLinkedin size="2em"/>}</button>
            <button className='p-4'>{<FaGitlab size="2em"/>}</button>
          </div>
        </div>
        <p className={`text-lg leading-relaxed mb-4 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        </p>
        <p className={`text-lg leading-relaxed text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        </p>
      </div>

      {/* Experience Card */}
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out hover:shadow-xl`}>
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {t.experience}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t.position}
            </h4>
            <p className={`text-base mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.description}
            </p>
            <p className={`text-sm italic mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.technologies}
            </p>
            <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextoProject;
