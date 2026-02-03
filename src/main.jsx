import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route }      from 'react-router';
import { AppProvider } from './components/context/AppContext.jsx';

import './style/index.css'
import App from './App.jsx'
import InicioProyectos  from './views/proyectos/ticket/InicioProyectos.jsx';
import Welcome from './views/proyectos/ticket/dashboard/Welcome.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <AppProvider>
            <Routes>

              <Route path="/" element={ <App /> }/>
              <Route path="/proyectos/ticket" element={ <InicioProyectos /> }/>
              <Route path='/proyectos/ticket/p/dashboard/merge-n!149' element={ <Welcome /> }/>

            </Routes>
        </AppProvider>
      </StrictMode>
  </BrowserRouter>
  
)
