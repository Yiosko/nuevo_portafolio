import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route }      from 'react-router';
import { AppProvider } from './components/context/AppContext.jsx';

import './style/index.css'
import App from './App.jsx'
import InicioProyectos  from './views/proyectos/ticket/InicioProyectos.jsx';
import Welcome from './views/proyectos/ticket/dashboard/Welcome.jsx';
import WelcomePqrs from './views/proyectos/ticket/pqrs/Welcome.jsx';
import ScrollToTop from './components/topScroll/ScrollToTop.jsx';
import WelcomeCalificar from './views/proyectos/ticket/pqrs_calificar/Welcome.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <AppProvider>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={ <App /> }/>
              <Route path="/proyectos/ticket" element={ <InicioProyectos /> }/>
              <Route path='/proyectos/ticket/p/dashboard/merge-n!149' element={ <Welcome /> }/>
              <Route path='/proyectos/ticket/p/pqrs/merge-n!136' element={ <WelcomePqrs /> }/>
              <Route path='/proyectos/ticket/p/pqrs-calificar/merge-n!137' element={ <WelcomeCalificar/> }/>
            </Routes>
        </AppProvider>
      </StrictMode>
  </BrowserRouter>
  
)
