import { useAppContext } from "../../../../components/context/AppContext";
import PanelDev from "../../../../components/panelDev/PanelDev";

import htmlDev from "./componentes/index.html?raw";
import styleDev from "./componentes/style.css?raw";
import Preview from "./componentes/Preview";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Welcome = () => {
    const {
        darkMode,
        toggleDarkMode,
        language,
        toggleLanguage
    } = useAppContext();

    const navegate = useNavigate();

    const translations = {
        en: {
            titulo: "Solutions Center (Rating)",
            description: `The rating module features an intuitive two-section form. 
            It identifies the user who provided the support, and the evaluation is done through a star-based system. 
            The first rating measures the quality of the solution provided, while the second evaluates the agent's customer service. 
            Based on these values, a detailed report with the support history can be downloaded.`
        },
        es: {
            titulo: "Centro de Soluciones (Calificación)",
            description: `El módulo de calificación cuenta con un formulario intuitivo dividido en dos secciones. 
            Identifica al usuario que realizó el soporte y permite evaluar el servicio mediante un sistema de estrellas. 
            La primera calificación mide la calidad de la solución brindada y la segunda evalúa la calidad de atención del agente. 
            Con estos valores, es posible descargar un reporte detallado con el historial del soporte.`
        }
    };

    const endpoints = [
        {
            id: 'get-agents',
            method: 'GET',
            url: 'controller/api/PQRS/obtenerAgentesSoporte',
            description: 'Obtener agentes para select',
            payload: {
            },
            response: {
                status: true,
                usuarios: [
                    {
                        id: "150",
                        alias: "CAMILO ROJAS",
                        roles: "5"
                    },
                    {
                        id: "465",
                        alias: "ANGIE GOMEZ",
                        roles: "5"
                    },
                    {
                        id: "505",
                        alias: "JUAN PENAGOS",
                        roles: "5"
                    }
                ]
            }
        },
        {
            id: 'calificar-caso',
            method: 'POST',
            url: "controller/api/PQRS/calificarCaso",
            description: 'Calificar caso ticket',
            payload: {
                cod_ticket: 8659,
                calificar: 4,
                like: true,
                comentario: 'Buena atención.'
            },
            response: {
                status: true,
                message: 'Se a calificado correctamente'
            }
        },
    ];

    const t = translations[language];

    return(
      <>
        <div className={`min-h-screen py-12 px-4 flex flex-col ${darkMode ? 'bg-gray-900': 'bg-gray-100'}`}>
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
                        ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                    {language === 'en' ? '🌐 ES' : '🌐 EN'}
                    </button>
                </div>
                <button 
                onClick={toggleDarkMode} 
                className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 ease-in-out
                    ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
            </div>

            <div className="container mx-auto max-w-7xl">
                <h1 className={`text-4xl text-center font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {t.titulo}
                </h1>

                <p className={`font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
    )
}

export default Welcome;