import React from 'react'
import { Header } from './components/Header'
import '../assets/css/home.css'
import { Control } from './components/Control'
import { VuelosTabla } from './components/VuelosTabla'
import MyComponent from './test/test'
export const Home = () => {
  return (
    <>

      <Control />
      <VuelosTabla/>
      
      {/* test */}
      {/* <MyComponent /> */}
    </>
  )
}
