const PuntoModel = require('../models/punto.js')

class PuntoManager {
    
    // Obtener todos los puntos
    getPuntos = () => {
        return PuntoModel.findAll();
    }

    // Obtener un punto por su ID
    getPuntoById = (id) => {
        return PuntoModel.findOne({ where: { id_punto: id } });
    }

    // Crear un nuevo punto
    createPunto = (puntoData) => {
        return PuntoModel.create(puntoData);
    }

    // Actualizar un punto por su ID
    updatePunto = (id, puntoData) => {
        return PuntoModel.update(puntoData, { where: { id_punto: id } });
    }

    // Eliminar un punto por su ID
    deletePunto = (id) => {
        return PuntoModel.destroy({ where: { id_punto: id } });
    }
}

module.exports = PuntoManager;
