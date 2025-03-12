const TextoProject = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      {/* About Me Card */}
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out hover:shadow-xl`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          ¡Hola! 👋
        </h2>
        <p className={`text-lg leading-relaxed mb-4 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Soy un desarrollador de software creativo y estudiante de la Universidad Surcolombiana. 
          Mi pasión radica en transformar ideas innovadoras en experiencias digitales cautivadoras.
        </p>
        <p className={`text-lg leading-relaxed text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Me destaco por combinar mis habilidades técnicas con un enfoque en diseño intuitivo, 
          siempre buscando crear soluciones que no solo funcionen perfectamente, sino que también 
          sean visualmente atractivas. Cuando no estoy programando, me encuentro explorando nuevas 
          tecnologías y tendencias en diseño para mantenerme a la vanguardia del desarrollo web.
        </p>
      </div>

      {/* Experience Card */}
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out hover:shadow-xl`}>
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Experiencia Profesional
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Desarrollador Fullstack - TicketSoft
            </h4>
            <p className={`text-base mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Plataforma integral de gestión de tickets y eventos que optimiza la experiencia de venta y distribución.
            </p>
            <p className={`text-sm italic mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Tecnologías: PHP, JavaScript, React, PHPStorm, Insomnia, MySQL, Node.js, Linux, GitLab, Terminal
            </p>
            <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Generación de nuevos servicios para los clientes</li>
              <li>Optimización de página y mejora de rendimiento</li>
              <li>Desarrollo de nuevas funcionalidades para empleados</li>
              <li>Integraciones con softwares externos (APIs)</li>
              <li>Resolución efectiva de bugs y problemas técnicos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextoProject;
