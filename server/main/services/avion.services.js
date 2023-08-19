const AvionManager = require('../database/managers/avion.manager')

const aviones = new AvionManager()

class AvionService {
    
    // Obtener todos los aviones
    getAvionesService = async () => {
        const getAviones = await aviones.getAviones();
        return getAviones.map(avion => avion.dataValues);
    }

    // Obtener un avión por su ID
    getAvionByIdService = async (id) => {
        const avion = await aviones.getAvionById(id);
        return avion ? avion.dataValues : null;
    }

    // Crear un nuevo avión
    createAvionService = async (avionData) => {
        const newAvion = await aviones.createAvion(avionData);
        return newAvion ? newAvion.dataValues : null;
    }

    // Actualizar un avión por su ID
    updateAvionService = async (id, avionData) => {
        const result = await aviones.updateAvion(id, avionData);
        return result > 0;
    }

    // Eliminar un avión por su ID
    deleteAvionService = async (id) => {
        const result = await aviones.deleteAvion(id);
        return result > 0;
    }
}

module.exports = AvionService;
