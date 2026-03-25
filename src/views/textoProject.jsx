import userImg from '../assets/userImg.webp';
import { FaGithub, FaGitlab, FaLinkedin, FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const TextoProject = ({ darkMode, language }) => {

  const navegate = useNavigate();
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
      ],
      ascertain: "Ascertain"
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
      ],
      ascertain: "Descubrir"
    }
  };

  const t = translations[language];
  return (
    <div className="space-y-8 ">
      {/* About Me Card */}
      <motion.div 
        className={`max-w-md mx-auto p-8 shadow-lg rounded-t-[6rem] ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-all duration-300 ease-in-out hover:shadow-xl`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className='flex items-center justify-center gap-6'>
          <div>
            <p className='rotate-90'>Yiosko</p>
          </div>
          <motion.img 
            src={userImg} 
            alt="DevIMG" 
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <div className='flex flex-col '> { /* ICONOS */}
            <motion.a 
              href='https://github.com/Yiosko' 
              target='_blank' 
              className='p-4'
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {<FaGithub size="2em"/>}
            </motion.a>
            <motion.a 
              href='https://www.linkedin.com/in/diego-alejandro-gutierrez-flores-a11207321/' 
              target='_blank' 
              className='p-4'
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {<FaLinkedin size="2em"/>}
            </motion.a>
            <motion.a 
              href="https://gitlab.com/Yiosko" 
              target='_blank' 
              className='p-4'
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {<FaGitlab size="2em"/>}
            </motion.a>
          </div>
        </div>
        <p className={`text-lg leading-relaxed mb-4 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        </p>
        <p className={`text-lg leading-relaxed text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        </p>
      </motion.div>

      <div className='max-w-md mx-auto text-center'>
        <div></div>
        <h3 className={`text-4xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.experience}
        </h3>
      </div>

      {/* Experience Card */}
      <motion.div 
        className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-all duration-300 ease-in-out hover:shadow-xl`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="space-y-4">
          <div>

            <div className='border-b-2'> {/*  HEADER Target */}
              <h4 className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Ticketsoft Technologies
              </h4>
              <h5 className={`text-lg font-light ml-3 mb-3`}>
                {t.position}
              </h5>
            </div>

            <p className={`text-base mb-3 mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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

            <div className='flex justify-end mt-6'> {/* FOOTER Target */}
              <motion.button 
                onClick={() => navegate('/proyectos/ticket')} 
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 
                ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'} hover:gap-4`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >

                {t.ascertain}

                <span className='flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1'> {/*ICONO -> */}
                  <motion.div
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {<FaArrowRight />}
                  </motion.div>
                </span>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TextoProject;
