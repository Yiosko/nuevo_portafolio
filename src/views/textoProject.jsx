const TextoProject = ({ darkMode, language }) => {
  const translations = {
    en: {
      greeting: "Hello! 👋",
      aboutMe1: "I am a creative software developer and student at Universidad Surcolombiana. My passion lies in transforming innovative ideas into captivating digital experiences.",
      aboutMe2: "I excel at combining my technical skills with a focus on intuitive design, always seeking to create solutions that not only work perfectly but are also visually appealing. When I'm not programming, I find myself exploring new technologies and design trends to stay at the forefront of web development.",
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
      greeting: "¡Hola! 👋",
      aboutMe1: "Soy un desarrollador de software creativo y estudiante de la Universidad Surcolombiana. Mi pasión radica en transformar ideas innovadoras en experiencias digitales cautivadoras.",
      aboutMe2: "Me destaco por combinar mis habilidades técnicas con un enfoque en diseño intuitivo, siempre buscando crear soluciones que no solo funcionen perfectamente, sino que también sean visualmente atractivas. Cuando no estoy programando, me encuentro explorando nuevas tecnologías y tendencias en diseño para mantenerme a la vanguardia del desarrollo web.",
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
    <div className="space-y-8">
      {/* About Me Card */}
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out hover:shadow-xl`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {t.greeting}
        </h2>
        <p className={`text-lg leading-relaxed mb-4 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {t.aboutMe1}
        </p>
        <p className={`text-lg leading-relaxed text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {t.aboutMe2}
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
