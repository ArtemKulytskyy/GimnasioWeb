import { useState } from 'react'
import Header from './components/common/Header'
import LandingPage from './components/LandingPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="GimnasioWeb">
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/header" element={<Header />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
