const AvionModel = require('../models/avion.js')

class AvionManager {
    
    // Obtener todos los aviones
    getAviones = () => {
        return AvionModel.findAll();
    }

    // Obtener un avion por su ID
    getAvionById = (id) => {
        return AvionModel.findOne({ where: { id_avion: id } });
    }

    // Crear un nuevo avion
    createAvion = (avionData) => {
        return AvionModel.create(avionData);
    }

    // Actualizar un avion por su ID
    updateAvion = (id, avionData) => {
        return AvionModel.update(avionData, { where: { id_avion: id } });
    }

    // Eliminar un avion por su ID
    deleteAvion = (id) => {
        return AvionModel.destroy({ where: { id_avion: id } });
    }
}

module.exports = AvionManager;
