const TextoProject = ({ darkMode }) => {
  return (
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
  );
};

export default TextoProject;
