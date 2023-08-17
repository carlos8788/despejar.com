const vueloModel = require('../models/vuelos.js')

class VueloManager {
    
    // Obtener todos los vuelos
    getVuelos = () => {
        return vueloModel.findAll();
    }

    // Obtener un vuelo por su ID
    getVueloById = (id) => {
        return vueloModel.findOne({ where: { id_vuelo: id } });
    }

    // Crear un nuevo vuelo
    createVuelo = (vueloData) => {
        return vueloModel.create(vueloData);
    }

    // Actualizar un vuelo por su ID
    updateVuelo = (id, vueloData) => {
        return vueloModel.update(vueloData, { where: { id_vuelo: id } });
    }

    // Eliminar un vuelo por su ID
    deleteVuelo = (id) => {
        return vueloModel.destroy({ where: { id_vuelo: id } });
    }
}

module.exports = VueloManager;
