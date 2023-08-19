const RutaModel = require('../models/rutas.js')

class RutaManager {
    
    // Obtener todas las rutas
    getRutas = () => {
        return RutaModel.findAll();
    }

    // Obtener una ruta por su ID
    getRutaById = (id) => {
        return RutaModel.findOne({ where: { id_ruta: id } }); // Asumo que el ID es id_ruta, pero cámbialo si es diferente.
    }

    // Crear una nueva ruta
    createRuta = (rutaData) => {
        return RutaModel.create(rutaData);
    }

    // Actualizar una ruta por su ID
    updateRuta = (id, rutaData) => {
        return RutaModel.update(rutaData, { where: { id_ruta: id } });
    }

    // Eliminar una ruta por su ID
    deleteRuta = (id) => {
        return RutaModel.destroy({ where: { id_ruta: id } });
    }
}

module.exports = RutaManager;
