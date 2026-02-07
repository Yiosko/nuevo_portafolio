import { useAppContext } from "../../../../components/context/AppContext";
import PanelDev from "../../../../components/panelDev/PanelDev";

const Welcome = () => {
    const {
        darkMode,
        toggleDarkMode,
        language,
        toggleLanguage
    } = useAppContext();

    const translations = {
        en: {
        titulo: "solutions center",
        },
        es: {
        titulo: "Centro de soluciones",
        }
    };

    const endpoints = {};

    return(
      <>
        <div className={`min-h-screen py-12 px-4 flex flex-col ${darkMode ? 'bg-gray-900': 'bg-gray-100'}`}>
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

            <div className="container text.center mx-auto max-w-7xl">
                <h1 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Centro de soluciones
                </h1>
            </div>
        </div>
      </>  
    )
}

export default Welcome;