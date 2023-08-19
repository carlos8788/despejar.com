const PuntoManager = require('../database/managers/punto.manager')

const puntos = new PuntoManager()

class PuntoService {
    
    // Obtener todos los puntos
    getPuntosService = async () => {
        const getPuntos = await puntos.getPuntos();
        return getPuntos.map(punto => punto.dataValues);
    }

    // Obtener un punto por su ID
    getPuntoByIdService = async (id) => {
        const punto = await puntos.getPuntoById(id);
        return punto ? punto.dataValues : null;
    }

    // Crear un nuevo punto
    createPuntoService = async (puntoData) => {
        const newPunto = await puntos.createPunto(puntoData);
        return newPunto ? newPunto.dataValues : null;
    }

    // Actualizar un punto por su ID
    updatePuntoService = async (id, puntoData) => {
        const result = await puntos.updatePunto(id, puntoData);
        return result > 0;
    }

    // Eliminar un punto por su ID
    deletePuntoService = async (id) => {
        const result = await puntos.deletePunto(id);
        return result > 0;
    }
}

module.exports = PuntoService;
