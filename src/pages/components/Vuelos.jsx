import React, { useState, useEffect } from 'react';
import '../../assets/css/vuelos.css'
import { testCanal } from '../../renderer/renderer';


export const Vuelos = () => {
  const [vuelos, setVuelos] = useState([]); // Inicializar como array vacío

  useEffect(() => {
    testCanal((data) => {
      setVuelos(data);
    });
  }, []);
  console.log(vuelos);
  return (
    <div>{vuelos.map(vuelo => <li key={vuelo.dataValues.id_vuelo}>{vuelo.dataValues.fecha}</li>)}</div>
  );
}
