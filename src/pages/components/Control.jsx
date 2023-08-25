import React, { useEffect, useState } from 'react'
import { dbQuery } from '../../renderer/renderer'

const selectQuantity = (name) => {
    return (
        <select name={name}>
            {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
            ))}
        </select>
    )
}


export const Control = () => {

    const getPuntos = async () => {
        await dbQuery((response) => setPunto(response), 'Soy un objeto puntos')

        return
    }

    useEffect(() => {
        getPuntos()

    }, [])

    const [punto, setPunto] = useState({
        origen: '',
        destino: ''
    })

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setPunto({
            ...punto,
            [name]: value
        })
    }

    const { origen, destino } = punto

    return (
        <section className='control-container'>
            <div className="control">
                <div className="control__paquete">
                    <p>Paquetes turísticos</p>
                    <button><i className="fas fa-plane"></i> Vuelo +  <i className="fas fa-bed"></i> Alojamiento</button>
                    <button><i className="fas fa-plane"></i> Vuelo</button>
                </div>
                <form action="" className='control__form'>
                    <div className='control__form-origen-destino'>
                        <input
                            type="text"
                            placeholder='Origen'
                            className='origen'
                            value={origen}
                            onChange={onInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Destino'
                            className='destino'
                            value={destino}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='control__form-fechas'>
                        <div className="partida">
                            <label htmlFor="Partida">Partida:</label>
                            <input type="date" name='Partida' />
                        </div>
                        <div className="regreso">
                            <label htmlFor="Regreso">Regreso:</label>
                            <input type="date" name='Regreso' />
                        </div>

                    </div>
                    <div className="control__form-habitaciones">
                        <label>
                            <i className="fas fa-bed"></i>
                            {selectQuantity('bedrooms')}
                        </label>

                        <label>
                            <i className='far fa-user'></i>
                            {selectQuantity('persons')}
                        </label>
                    </div>
                    <div className="container__btn">
                        <button type="submit" className='btn-buscar'>
                            <i className="fas fa-search"></i> Buscar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
