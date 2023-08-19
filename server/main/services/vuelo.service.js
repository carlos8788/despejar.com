const VueloManager = require('../database/managers/vuelos.manager')

const vuelos = new VueloManager()

class VuelosService {

    // Obtener todos los vuelos
    getVuelosService = async () => {
        const getVuelos = await vuelos.getVuelos()
        const data = getVuelos.map(vuelo => vuelo.dataValues)
        return data
    }

    // Obtener un vuelo por su ID
    getVueloByIdService = async (id) => {
        const vuelo = await vuelos.getVueloById(id);
        return vuelo ? vuelo.dataValues : null;
    }

    // Crear un nuevo vuelo
    createVueloService = async (vueloData) => {
        const newVuelo = await vuelos.createVuelo(vueloData);
        return newVuelo ? newVuelo.dataValues : null;
    }

    // Actualizar un vuelo por su ID
    updateVueloService = async (id, vueloData) => {
        const result = await vuelos.updateVuelo(id, vueloData);
        return result > 0;  // Esto devuelve un booleano indicando si la operación fue exitosa.
    }

    // Eliminar un vuelo por su ID
    deleteVueloService = async (id) => {
        const result = await vuelos.deleteVuelo(id);
        return result > 0;  // Esto devuelve un booleano indicando si la operación fue exitosa.
    }

    // Obtener vista de vuelos
    getVuelosViewService = async () => {
        const getVuelosView = await vuelos.vuelosView();
        const data = getVuelosView.map(vuelo => vuelo.dataValues);
        return data;
    }

}

module.exports = VuelosService;

// const vuelo = new VuelosService();

// const main = async () => {
//     const v = await vuelo.getVueloByIdService(1)
//     // console.log(v);
// }

// main()