import React from 'react'
import { Header } from './components/Header'
import '../assets/css/home.css'
import { Control } from './components/Control'
import { Vuelos } from './components/Vuelos'
export const Home = () => {
  return (
    <>

      <Control />
      <Vuelos/>
      
    </>
  )
}
