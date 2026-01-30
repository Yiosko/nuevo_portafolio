import { createContext, useContext , useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');

    const toggleDarkMode = () => setDarkMode(prev => !prev);
    const toggleLanguage = () =>
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'));

    return (
        <AppContext.Provider
        value={{
            darkMode,
            toggleDarkMode,
            language,
            toggleLanguage
        }}
        >
        {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);