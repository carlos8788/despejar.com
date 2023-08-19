import React, { useState, useEffect,  } from 'react';
import '../../assets/css/vuelos.css'
import { testCanal } from '../../renderer/renderer';
import { useNavigate } from 'react-router-dom';


export const VuelosTabla = () => {
  const [vuelos, setVuelos] = useState([]);

  const navigate = useNavigate();

  const comprarVuelo = (vueloId) => {
    navigate(`/pages/comprar-vuelo/${vueloId}`);
  }
  useEffect(() => {
    testCanal((data) => {
      setVuelos(data);
    });
  }, []);

  let headers = [];
  
  if (vuelos.length > 0) {
    headers = Object.keys(vuelos[0]);
    // headers[0] = 'ID del vuelo'
    console.log(headers);
    console.log(vuelos);
  }

  return (
    <div className="table__container">
      <h2>Vuelos</h2>
      <table className='table'>
        <thead>
          <tr>
            {headers.map((header, key) => {
              if (header === 'ID') header = 'ID vuelo ';
              return <th key={key}>{header}</th>
            })}
            <th>Comprar</th>
          </tr>
        </thead>
        <tbody>
          {vuelos.map((vuelo, key) => (
            <tr key={key} className={`table__tr ${(key%2==0) ? 'dark' : ''}`} >
              {headers.map((header, innerKey) => (
                <td key={innerKey}>{vuelo[header]}</td>
              ))}
              <td>
                
                <button className='btn-comprar' onClick={()=>comprarVuelo(vuelo.ID)}>Comprar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

