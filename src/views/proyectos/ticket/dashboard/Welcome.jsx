import { useAppContext } from "../../../../components/context/AppContext";
import PanelDev from "../../../../components/panelDev/PanelDev";

import htmlDev from "./componentes/index.html?raw";
import styleDev from "./componentes/style.css?raw";
import Preview from "./componentes/Preview";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Welcome = () => {
  const { darkMode, toggleDarkMode, language, toggleLanguage } =
    useAppContext();

  const navegate = useNavigate();

  const translations = {
    en: {
      titulo: "Projects TicketSoft",
      description: `Main dashboard of the TicketSoft system.
        Provides an overview of the active session, quick access to key modules, and a centralized panel designed to optimize user workflow and efficiency.`,
    },
    es: {
      titulo: "Projectos TiketSoft",
      description: `Dashboard principal del sistema TicketSoft. 
        Ofrece una vista general del estado de la sesión, accesos rápidos a los módulos más importantes y un panel de opciones diseñado para optimizar la gestión y el tiempo del usuario.`,
    },
  };

  const endpoints = [
    {
      id: "get-session",
      method: "GET",
      url: "controller/api/ModelSesion/obtenerSesion",
      description: "Obtener sesión activa",
      payload: {
        cod_station: 1234,
        usuario_name: "USUARIO EJEMPLO",
        password: "contraseñaSecreta1234",
      },
      response: {
        status: true,
        message: "La sesión se realizo correctamente",
      },
    },
    {
      id: "logout",
      method: "POST",
      url: "controller/api/ModelSesion/cerrarSesion",
      description: "Cerrar sesión",
      payload: {
        status: true,
        message: "Sesión cerrada correctamente",
      },
      response: {},
    },
  ];

  const t = translations[language];
  return (
    <>
      <div
        className={`min-h-screen py-12 px-4 flex flex-col ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
      >
        <div className="fixed top-4 left-0 right-0 px-4 flex justify-between transition-opacity duration-300">
          <div className="flex gap-2">
            <motion.button
              onClick={() => navegate("/proyectos/ticket")}
              className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
                                ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome />
            </motion.button>
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
                            ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              {language === "en" ? "🌐 ES" : "🌐 EN"}
            </button>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
                        ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="container mx-auto max-w-7xl">
          <h1
            className={`text-4xl text-center font-bold mb-12 ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            DashBoard
          </h1>

          <p
            className={`font-light mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            {t.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <PanelDev
              preview={<Preview />}
              htmlRaw={htmlDev}
              cssRaw={styleDev}
              endpoints={endpoints}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
