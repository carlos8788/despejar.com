import { useState, useEffect } from 'react'

import { Home } from './pages/Home';
import { Vuelos } from './pages/Vuelos';
import { Admin } from './pages/Admin';
import { Alojamientos } from './pages/Alojamientos';
import { Ofertas } from './pages/Ofertas';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleResponse = (respuesta) => {
      respuesta.forEach(resp => {
        console.log(resp.dataValues);
      })
    };

    window.electron.ipcRenderer.on('mi-canal-respuesta', handleResponse);

    // Enviar un mensaje inicial
    window.electron.ipcRenderer.send('mi-canal', 'Enviando desde el front');
    // window.electron.ipcRenderer.on('mi-canal-respuesta', resp);

    // Eliminar el oyente del evento cuando el componente se desmonte
    return () => {
      window.electron.ipcRenderer.removeAllListeners('mi-canal-respuesta', handleResponse);
    };
  }, []); //
  function sendMessage() {
    window.electron.ipcRenderer.send('mi-canal', 'mi-mensaje');

  }
  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/ofertas" element={<Ofertas />} />
          <Route path="/pages/alojamientos" element={<Alojamientos />} />
          <Route path="/pages/vuelos" element={<Vuelos />} />
          <Route path="/pages/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
