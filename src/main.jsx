import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route }      from 'react-router';
import { AppProvider } from './components/context/AppContext.jsx';

import './style/index.css'
import App from './App.jsx'
import InicioProyectos  from './views/proyectos/ticket/InicioProyectos.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <AppProvider>
            <Routes>

              <Route path="/" element={ <App /> }/>
              <Route path="/proyectos/ticket" element={ <InicioProyectos /> }/>

            </Routes>
        </AppProvider>
      </StrictMode>
  </BrowserRouter>
  
)
