import React from 'react'

export const Alojamientos = () => {
    return (
        <section className='home-main'>
            <p className='home-subtitle'>El tipo de alojamiento dice mucho sobre el viaje, ¿qué buscás para tus vacaciones o viaje?</p>
            <div className="home-cards">
                <a href='#' className="card">
                    <div className="imagen img-1"></div>
                    <div className="card-title">Hoteles</div>
                </a>
                <a href='#' className="card">
                    <div className="imagen img-2"></div>
                    <div className="card-title">Departamentos</div>
                </a>
                <a href='#' className="card">
                    <div className="imagen img-3"></div>
                    <div className="card-title">Hoteles Boutique</div>
                </a>
            </div>

        </section>
    )
}
