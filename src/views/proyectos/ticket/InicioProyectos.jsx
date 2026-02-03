import { useAppContext } from "../../../components/context/AppContext";
import { getProjects } from "../../../controllers/projectController";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { FaCodeBranch, FaGitAlt, FaCodeMerge} from "react-icons/fa6";

const InicioProyectos = () => {
      const {
            darkMode,
            toggleDarkMode,
            language,
            toggleLanguage
        } = useAppContext();

    const proyectos = getProjects();
    const navegate = useNavigate();

  const translations = {
    en: {
      titulo: "Projects TicketSoft",
    },
    es: {
      titulo: "Projectos TiketSoft",
    }
  };

  const t = translations[language];

    return(
        <>
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
                    <h1 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {t.titulo}
                    </h1>

                        <div className={`grid grid-cols-1 sm:grid-cols-3 place-items-center gap-6 max-w-5xl mx-auto p-6 rounded-xl shadow-md mb-12
                        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
                        `}>

                        <div className="flex items-center gap-4 p-3 rounded-lg hover:scale-105 transition-transform cursor-default">
                        <FaGitAlt className="text-3xl text-green-500" />
                        <div>
                            <h4 className="text-sm uppercase tracking-wide opacity-70">Commits</h4>
                            <p className="text-xl font-bold">+700</p>
                        </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:scale-105 transition-transform cursor-default">
                        <FaCodeMerge className="text-3xl text-purple-500" />
                        <div>
                            <h4 className="text-sm uppercase tracking-wide opacity-70">Merges</h4>
                            <p className="text-xl font-bold">+200</p>
                        </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 rounded-lg hover:scale-105 transition-transform cursor-default">
                        <FaCodeBranch className="text-3xl text-blue-500" />
                        <div>
                            <h4 className="text-sm uppercase tracking-wide opacity-70">Branches</h4>
                            <p className="text-xl font-bold">+125</p>
                        </div>
                        </div>

                    </div>

                    {
                    proyectos.map(p => (
                        <div key={p.id} className={`max-w-4xl mx-auto rounded-lg shadow-lg m-5 ${
                            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                        } transition-all duration-300 ease-in-out hover:shadow-xl`}>

                            <div className="flex flex-col md:flex-row">
                                <img src={p.imageUrl} alt={p.title}
                                    className="w-full h-48 md:w-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"/>


                                <div className="p-4 md:p-6 justify-between">
                                    <h5 className={`text-lg md:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {p.title}
                                    </h5>

                                    <p className={`text-sm md:text-base mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {p.description}
                                    </p>

                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium mt-4 
                                        ${darkMode ? 'bg-green-400/10 text-green-400 inset-ring inset-ring-green-500/20' : 'bg-blue-400/10 text-blue-400 inset-ring inset-ring-blue-400/30'  }`}>
                                        {p.etiquetas}
                                    </span>

                                    <div className="flex justify-end mt-4">
                                        <button
                                            onClick={() => navegate(p.url)}
                                            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-full font-medium
                                            transition-all duration-300
                                            ${darkMode
                                                ? 'bg-white text-gray-900 hover:bg-gray-200'
                                                : 'bg-gray-900 text-white hover:bg-gray-800'}
                                            `} >
                                            <FaArrowRight />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))
                    }

                </div>

                <p className={`font-medium text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>NO HAY MÁS CONTENIDO POR AHORA</p>
                    
            </div>
        </>
    )
}

export default InicioProyectos;