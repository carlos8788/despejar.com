import React from 'react'
import { Header } from './components/Header'
import '../assets/css/home.css'
import { Control } from './components/Control'
import { VuelosTabla } from './components/VuelosTabla'
import MyComponent from './test/test'

const HomeMain = () => {
  return (
    <section className='home-main'>
      <p className='home-subtitle'>El tipo de alojamiento dice mucho sobre el viaje, ¿qué buscás para tus vacaciones o viaje?</p>
      <div className="home-cards">
        <div className="card">
          <div className="imagen"></div>
          <div className="card-title">Lorem</div>
        </div>
        <div className="card">
          <div className="imagen"></div>
          <div className="card-title">Lorem</div>
        </div>
        <div className="card">
          <div className="imagen"></div>
          <div className="card-title">Lorem</div>
        </div>
      </div>

    </section>
  )
}

export const Home = () => {
  return (
    <>

      <Control />
      <HomeMain />
      {/* <VuelosTabla/> */}

      {/* test */}
      {/* <MyComponent /> */}
    </>
  )
}
