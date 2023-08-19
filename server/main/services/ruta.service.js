const RutasManager = require('../database/managers/ruta.manager')

const rutas = new RutasManager()

class RutasService {
    
    // Obtener todas las rutas
    getRutasService = async () => {
        const getRutas = await rutas.getRutas();
        return getRutas.map(ruta => ruta.dataValues);
    }

    // Obtener una ruta por su ID
    getRutaByIdService = async (id) => {
        const ruta = await rutas.getRutaById(id);
        return ruta ? ruta.dataValues : null;
    }

    // Crear una nueva ruta
    createRutaService = async (rutaData) => {
        const newRuta = await rutas.createRuta(rutaData);
        return newRuta ? newRuta.dataValues : null;
    }

    // Actualizar una ruta por su ID
    updateRutaService = async (id, rutaData) => {
        const result = await rutas.updateRuta(id, rutaData);
        return result > 0;
    }

    // Eliminar una ruta por su ID
    deleteRutaService = async (id) => {
        const result = await rutas.deleteRuta(id);
        return result > 0;
    }
}

module.exports = RutasService;
