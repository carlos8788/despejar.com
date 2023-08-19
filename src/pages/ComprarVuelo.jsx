import React, { useState, useEffect, } from 'react';
import { Header } from './components/Header';
import { useParams } from 'react-router-dom';
import { dbQuery } from '../renderer/renderer';
import '../assets/css/compraPasaje.css'

export const ComprarVuelo = () => {
    // console.log(id);
    const { vueloId } = useParams();
    const [vuelo, setVuelo] = useState(null);

    useEffect(() => {
        dbQuery((data) => {
            setVuelo(data);
        }, { id: vueloId });
    }, [vueloId]);
    console.log(vuelo);
    const asientos = Array(6).fill(null).map((_, idx) => `Asiento ${idx + 1}`);
    if (!vuelo) {
        return <p>Cargando...</p>;
    }

    return (

        <>
            <div className="titulo">
                <h2>Comprá tu pasaje</h2>
            </div>

            <div className="container__vuelo">
                <div className="grid-container">
                    {Array(vuelo.capacidad).fill(null).map((_, idx) => (
                        <div
                            className={`asiento ${idx % 6 === 2 ? 'asiento-columna-c' : ''}`}
                            key={idx}
                        >
                            {`${idx + 1}`}
                        </div>
                    ))}
                </div>
                <div className='datos'>
                    <h2>{vuelo.origen} - {vuelo.destino}</h2>
                    <h3>{(new Date(vuelo.fecha)).toLocaleDateString()}</h3>
                    <h4>{vuelo.horario_vuelo} - {vuelo.capacidad}</h4>
                </div>


            </div>
        </>
    );
}
