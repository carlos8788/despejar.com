import React from 'react'

export const Control = () => {
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
                        <input type="text" placeholder='Origen' className='origen' />
                        <input type="text" placeholder='Destino' className='destino' />
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
                            <select>
                                {[1, 2, 3, 4].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            <i className='far fa-user'></i>
                            {/* <select value={numRooms} onChange={handleRoomsChange}> */}
                            <select >
                                {[1, 2, 3, 4].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
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
