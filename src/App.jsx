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
