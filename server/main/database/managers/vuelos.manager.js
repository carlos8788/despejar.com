const vueloModel = require('../models/vuelos.js')

class VueloManager {
    getVuelos = () => {
        console.log(vueloModel.findAll());
        return vueloModel.findAll();
    }
}

module.exports = VueloManager;
