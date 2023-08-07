import React from 'react'
import despejar from '../../assets/img/despejar.png'


export const Header = () => {

  return (

    <header>
      <nav className='nav-access'>
        <img src={despejar} alt="despejar" />
        <ul>
          <li className='call'>
            <a href="#" >
              <i className='fas fa-headset'></i> <span>Para ventas 111-222-333</span>
            </a>
          </li>
          <li className='passport'><a href="#"><i className='fas fa-passport'></i> Pasaporte</a></li>
          <li><a href="#"><i className='far fa-user'></i> Iniciar Sesión</a></li>
          <li><a href="#"><i className='fas fa-suitcase'></i> Mis viajes</a></li>
          <li><a href="#"><i className='far fa-question-circle'></i> Ayuda</a></li>
        </ul>
      </nav>
      <section className='sections'>
        <ul>
          <li><a href="#"><i className="fas fa-suitcase-rolling"></i><span>Paquetes</span></a></li>
          <li><a href="#"><i className="fas fa-plane"></i><span>Vuelos</span></a></li>
          <li><a href="#"><i className="fas fa-fire-alt"></i><span>Ofertas</span></a></li>
          <li><a href="#"><i className="fas fa-bed"></i><span>Alojamientos</span></a></li>
        </ul>
      </section>
    </header>
  )
}
