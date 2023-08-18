import React, { useState, useEffect,  } from 'react';
import { Header } from './components/Header';
import { useParams } from 'react-router-dom';
import { dbQuery } from '../renderer/renderer';

export const ComprarVuelo = () => {
    // console.log(id);
    const { vueloId } = useParams();
    const [vuelo, setVuelo] = useState(null);

    useEffect(() => {
        dbQuery((data) => {
            setVuelo(data);
        }, { id: vueloId });
    }, [vueloId]);
    if(vuelo) console.log(vuelo);
    return (
        <>
           hola mundo {vueloId}

        </>
    )
}
