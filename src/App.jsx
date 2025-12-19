import { useState } from 'react'
import Header from './components/common/Header'
import LandingPage from './components/LandingPage'
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"
import Locales from './components/Locales'
import Clases from './components/Clases'
import ScrollToTop from './components/common/ScrollToTop'
import Entrenadores from './components/Entrenadores'
import IniciarSesionModal from './components/IniciarSesionModal'
import Registro from './components/Registro'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/locales" element={<Locales />}/>
          <Route path="/clases" element={<Clases />}/>
          <Route path="/entrenadores" element={<Entrenadores />}/>
          <Route path="/login" element={<IniciarSesionModal />}/>
          <Route path="/signup" element={<Registro />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
