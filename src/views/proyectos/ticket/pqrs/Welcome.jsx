import { useAppContext } from "../../../../components/context/AppContext";
import PanelDev from "../../../../components/panelDev/PanelDev";

import htmlDev from "./componentes/index.html?raw";
import styleDev from "./componentes/style.css?raw";
import Preview from "./componentes/Preview";

const Welcome = () => {
    const {
        darkMode,
        toggleDarkMode,
        language,
        toggleLanguage
    } = useAppContext();

    const translations = {
        en: {
        titulo: "Solutions center (Panel PQRS)",
        description: `It is a PQRS management panel where support agents can view, assign, and manage cases reported by clients.
        It allows tracking ticket status, reassigning cases between agents, viewing performance statistics, and enabling customers to rate the service.`
        },
        es: {
        titulo: "Centro de soluciones (Panel PQRS)",
        description: `Es un panel de gestión de PQRS donde los agentes de soporte pueden visualizar, asignar y administrar los casos reportados por los clientes.
        Permite el seguimiento del estado de los tickets, la reasignación entre agentes, la visualización de estadísticas y la calificación del servicio por parte del cliente.`
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
            id: 'agent_statistics',
            method: 'POST',
            url: 'controller/api/PQRS/obtenerEstadisticaAgente',
            description: 'Obtener estadistica del agente',
            payload: {
                fecha: '2026-02',
                cod_usuario: 504,
            },
            response: {
                status: true,
                stats: {
                    asignados: 0,
                    gestionados: 0,
                    finalizados: 0,
                    total_calificaciones: 0,
                    total_calificados: 0,
                    promedio_calificacion: 0
                }
            }
        },
        {
            id: 'Obtener Tickets',
            method: 'POST',
            url: 'controller/api/PQRS/obtenerTickets',
            description: 'Mostrar los tickets',
            payload: {
                estado: '%', 
                asignado: '%',
                calificacion: '%',
                estacion: '%',
                fecha: '%',
                limit: 15,
                offset: 0,
                diasConsultar: '%',
                departamento: '%',
            },
            response: {
                status: true,
                title: "Error de Modelos",
                message: "Se encontr\u00f3 la informaci\u00f3n.",
                info: [
                    {
                        "cod_ticket": "8514",
                        "titulo": "Facturas o ticket de venta registran valor errado  o como orden de pedido",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9248",
                        "nom_estacion": "ESTACION DE SERVICIO ARAUCARIAS",
                        "cod_estacion_session_califica": null,
                        "calificacion": "0",
                        "comentario": null,
                        "cod_usuario_califica": 0,
                        "alias_califica": "",
                        "cod_usuario_copia_link": 0,
                        "alias_copia_link": "",
                        "cod_usuario_solicita": "556",
                        "alias_solicita": "ESTACION DE SERVICIO ARAUCARIAS S.A.S",
                        "alias": "JUAN PENAGOS",
                        "telefono_cliente": "3117611905",
                        "comentario_agente": "0",
                        "correo": "edsaraucarias@gmail.com",
                        "celular": "3181931861",
                        "img_usuario": "",
                        "fecha_creacion": "2026-02-11 15:16:15",
                        "fecha_calificacion": null,
                        "asignado": "JUAN PENAGOS",
                        "cod_asignado": "505",
                        "time_line": [],
                        "ultimo_estado_alias": "Sin gestiones previas",
                        "fecha_update": "2026-02-11 20:36:50"
                    },
                    {
                        "cod_ticket": "8513",
                        "titulo": "Precio no cambia en el dispensador \/ surtidor",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9105",
                        "nom_estacion": "EDS AUTOCAR\u00b4S - QUETZAL SERVICE S.A.S",
                        "cod_estacion_session_califica": null,
                        "calificacion": "0",
                        "comentario": null,
                        "cod_usuario_califica": 0,
                        "alias_califica": "",
                        "cod_usuario_copia_link": 0,
                        "alias_copia_link": "",
                        "cod_usuario_solicita": "375",
                        "alias_solicita": "JOSE GUTIERREZ",
                        "alias": "JUAN PENAGOS",
                        "telefono_cliente": "3143722692",
                        "comentario_agente": "0",
                        "correo": "gp.mariaesas@gmail.com",
                        "celular": "3181931861",
                        "img_usuario": "",
                        "fecha_creacion": "2026-02-11 14:10:43",
                        "fecha_calificacion": null,
                        "asignado": "JUAN PENAGOS",
                        "cod_asignado": "505",
                        "time_line": [],
                        "ultimo_estado_alias": "Sin gestiones previas",
                        "fecha_update": "2026-02-11 19:16:50"
                    },
                    {
                        "cod_ticket": "8512",
                        "titulo": "Dispensador \/ surtidor bloqueado",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "8009",
                        "nom_estacion": "SALDARRIAGA MOLINA SAS",
                        "cod_estacion_session_califica": "8009",
                        "calificacion": "5",
                        "comentario": "Excelente gesti\u00f3n del servicio ",
                        "cod_usuario_califica": "114",
                        "alias_califica": "CLAUDIA PATRICIA MOLINA",
                        "cod_usuario_copia_link": "465",
                        "alias_copia_link": "ANGIE GOMEZ",
                        "cod_usuario_solicita": "114",
                        "alias_solicita": "CLAUDIA PATRICIA MOLINA",
                        "alias": "ANGIE GOMEZ",
                        "telefono_cliente": "3218525613",
                        "comentario_agente": "Solucionado, pendiente por calificar ",
                        "correo": "EDSSM.SAS@GMAIL.COM",
                        "celular": "3177113980",
                        "img_usuario": "assets\/plantilla\/images\/user.png",
                        "fecha_creacion": "2026-02-11 12:26:53",
                        "fecha_calificacion": "2026-02-11 13:34:00",
                        "asignado": "ANGIE GOMEZ",
                        "cod_asignado": "465",
                        "time_line": [
                            {
                                "id": "15796",
                                "cod_ticket": "8512",
                                "tipo": "calificacion",
                                "cod_usuario": "114",
                                "nom_usuario": "CLAUDIA PATRICIA MOLINA",
                                "fecha": "2026-02-11 13:34:00"
                            }
                        ],
                        "ultimo_estado_alias": "ANGIE GOMEZ",
                        "fecha_update": "2026-02-11 18:34:00"
                    },
                    {
                        "cod_ticket": "8511",
                        "titulo": "Factura no reportadas al cliente o a la DIAN",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9060",
                        "nom_estacion": "EDS EL CEDRO INVERSIONES CODI 5 S.A.S",
                        "cod_estacion_session_califica": "9060",
                        "calificacion": "5",
                        "comentario": "Excelente gesti\u00f3n",
                        "cod_usuario_califica": "315",
                        "alias_califica": "INVERSIONES CODI 5 SAS",
                        "cod_usuario_copia_link": "465",
                        "alias_copia_link": "ANGIE GOMEZ",
                        "cod_usuario_solicita": "315",
                        "alias_solicita": "INVERSIONES CODI 5 SAS",
                        "alias": "ANGIE GOMEZ",
                        "telefono_cliente": "3123513408",
                        "comentario_agente": "Solucionado, pendiente por calificar ",
                        "correo": "inversionescodi5sas@gmail.com",
                        "celular": "3177113980",
                        "img_usuario": "assets\/images\/imgs_perfil\/315_MjAyMy0wMS0yMCAxMzo1NDo0M2xvZ28gZWRzLTAx.png",
                        "fecha_creacion": "2026-02-11 12:02:41",
                        "fecha_calificacion": "2026-02-11 12:32:35",
                        "asignado": "ANGIE GOMEZ",
                        "cod_asignado": "465",
                        "time_line": [
                            {
                                "id": "15795",
                                "cod_ticket": "8511",
                                "tipo": "calificacion",
                                "cod_usuario": "315",
                                "nom_usuario": "INVERSIONES CODI 5 SAS",
                                "fecha": "2026-02-11 12:32:35"
                            }
                        ],
                        "ultimo_estado_alias": "ANGIE GOMEZ",
                        "fecha_update": "2026-02-11 17:32:35"
                    },
                    {
                        "cod_ticket": "8510",
                        "titulo": "Factura no reportadas al cliente o a la DIAN",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "8008",
                        "nom_estacion": "EDS INVERSIONES FLOTA HUILA",
                        "cod_estacion_session_califica": "8008",
                        "calificacion": "5",
                        "comentario": "",
                        "cod_usuario_califica": "111",
                        "alias_califica": "NATALIA RAMIREZ",
                        "cod_usuario_copia_link": "465",
                        "alias_copia_link": "ANGIE GOMEZ",
                        "cod_usuario_solicita": "111",
                        "alias_solicita": "NATALIA RAMIREZ",
                        "alias": "ANGIE GOMEZ",
                        "telefono_cliente": "3102030193",
                        "comentario_agente": "0",
                        "correo": "E.D.SFLOTAHUILA@GMAIL.COM",
                        "celular": "3177113980",
                        "img_usuario": "assets\/images\/imgs_perfil\/111_MjAyNC0wOS0wMyAwOTowOTowOElNR184NTM5.jpg",
                        "fecha_creacion": "2026-02-11 11:06:58",
                        "fecha_calificacion": "2026-02-11 11:18:54",
                        "asignado": "ANGIE GOMEZ",
                        "cod_asignado": "465",
                        "time_line": [
                            {
                                "id": "15791",
                                "cod_ticket": "8510",
                                "tipo": "calificacion",
                                "cod_usuario": "111",
                                "nom_usuario": "NATALIA RAMIREZ",
                                "fecha": "2026-02-11 11:18:54"
                            }
                        ],
                        "ultimo_estado_alias": "Sin gestiones previas",
                        "fecha_update": "2026-02-11 16:18:54"
                    },
                    {
                        "cod_ticket": "8509",
                        "titulo": "Dispensador \/ surtidor bloqueado",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9118",
                        "nom_estacion": "EDS LAS VIOLETAS - ROSALINA IBARRA ORDO\u00d1EZ  ",
                        "cod_estacion_session_califica": null,
                        "calificacion": "0",
                        "comentario": null,
                        "cod_usuario_califica": 0,
                        "alias_califica": "",
                        "cod_usuario_copia_link": 0,
                        "alias_copia_link": "",
                        "cod_usuario_solicita": "395",
                        "alias_solicita": "OSCAR RAMIRO ORDO\u00d1EZ IBARRA",
                        "alias": "CAMILO ROJAS",
                        "telefono_cliente": "127508810",
                        "comentario_agente": "guiar a la eds con la instalaci\u00f3n de unos componentes de forma remota ",
                        "correo": "p20ramiro@hotmail.com",
                        "celular": "3107994028",
                        "img_usuario": "",
                        "fecha_creacion": "2026-02-11 10:31:25",
                        "fecha_calificacion": null,
                        "asignado": "CAMILO ROJAS",
                        "cod_asignado": "150",
                        "time_line": [],
                        "ultimo_estado_alias": "ANGIE GOMEZ",
                        "fecha_update": "2026-02-11 18:33:37"
                    },
                    {
                        "cod_ticket": "8508",
                        "titulo": "Actualizacion de sistema en el dispensador \/ surtidor",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9083",
                        "nom_estacion": "EDS NUEVA FLORIDA - AGRO COMBUSTIBLES S.A.S",
                        "cod_estacion_session_califica": "9083",
                        "calificacion": "5",
                        "comentario": ".",
                        "cod_usuario_califica": "343",
                        "alias_califica": "NESTOR MU\u00d1OZ",
                        "cod_usuario_copia_link": "465",
                        "alias_copia_link": "ANGIE GOMEZ",
                        "cod_usuario_solicita": "343",
                        "alias_solicita": "NESTOR MU\u00d1OZ",
                        "alias": "ANGIE GOMEZ",
                        "telefono_cliente": "3227875406",
                        "comentario_agente": "Solucionado, pendiente por calificar ",
                        "correo": "nestormunoz2005@yahoo.com",
                        "celular": "3177113980",
                        "img_usuario": "assets\/images\/imgs_perfil\/343_MjAyMy0wNS0zMCAxNDoxMzoyNWxvZ28gcHJpbWF4.png",
                        "fecha_creacion": "2026-02-11 09:54:40",
                        "fecha_calificacion": "2026-02-11 11:17:41",
                        "asignado": "ANGIE GOMEZ",
                        "cod_asignado": "465",
                        "time_line": [
                            {
                                "id": "15790",
                                "cod_ticket": "8508",
                                "tipo": "calificacion",
                                "cod_usuario": "343",
                                "nom_usuario": "NESTOR MU\u00d1OZ",
                                "fecha": "2026-02-11 11:17:41"
                            }
                        ],
                        "ultimo_estado_alias": "ANGIE GOMEZ",
                        "fecha_update": "2026-02-11 16:17:41"
                    },
                    {
                        "cod_ticket": "8507",
                        "titulo": "C\u00f3digo QR no funciona correctamente",
                        "area": "SOPORTE",
                        "estado": "EN ESPERA",
                        "cod_estacion": "9159",
                        "nom_estacion": "EDS CARMEN DEL SUR - CASTRO LOMELING ABSALON",
                        "cod_estacion_session_califica": null,
                        "calificacion": "0",
                        "comentario": null,
                        "cod_usuario_califica": 0,
                        "alias_califica": "",
                        "cod_usuario_copia_link": 0,
                        "alias_copia_link": "",
                        "cod_usuario_solicita": "437",
                        "alias_solicita": "ABSALON CASTRO ",
                        "alias": "ANGIE GOMEZ",
                        "telefono_cliente": "3125373997",
                        "comentario_agente": "Solucionado, pendiente por calificar ",
                        "correo": "eds.elcarmendelsur@hotmail.com",
                        "celular": "3177113980",
                        "img_usuario": "",
                        "fecha_creacion": "2026-02-11 09:52:59",
                        "fecha_calificacion": null,
                        "asignado": "ANGIE GOMEZ",
                        "cod_asignado": "465",
                        "time_line": [],
                        ultimo_estado_alias: "ANGIE GOMEZ",
                        fecha_update: "2026-02-11 16:06:24"
                    }
                ]
            }
        },
        {
            id: 'reasignar-caso',
            method: 'POST',
            url: "controller/api/PQRS/reasignarCaso",
            description: 'Reasignar caso ticket',
            payload: {
                cod_ticket: 8510,
                nuevo_asignado: 390,
                comentario: 'Se termino el turno.'
            },
            response: {
                status: true,
                message: 'Se reasigno correctamente'
            }
        },
        {
            id: 'asignar-caso',
            method: 'POST',
            url: "controller/api/PQRS/reasignarCaso",
            description: 'Reasignar caso ticket',
            payload: {
                cod_ticket: 8510,
                asignado: 390,
            },
            response: {
                status: true,
                message: 'Se reasigno correctamente'
            }
        },
    ];

    const t = translations[language];

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

            <div className="container mx-auto max-w-7xl">
                <h1 className={`text-4xl text-center font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {t.titulo}
                </h1>

                <p className={`font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {t.description}
                </p>

                <PanelDev
                    preview={<Preview />}
                    htmlRaw={htmlDev}
                    cssRaw={styleDev}
                    endpoints={endpoints}
                    />
            </div>
        </div>
      </>  
    )
}

export default Welcome;