import { useState } from 'react'
import Header from './components/common/Header'
import LandingPage from './components/LandingPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Locales from './components/Locales'
import Clases from './components/Clases'
import ScrollToTop from './components/common/ScrollToTop'
import Entrenadores from './components/Entrenadores'
import IniciarSesionForm from './components/IniciarSesionForm'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="GimnasioWeb">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/locales" element={<Locales />}/>
          <Route path="/clases" element={<Clases />}/>
          <Route path="/entrenadores" element={<Entrenadores />}/>
          <Route path="/login" element={<IniciarSesionForm />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
