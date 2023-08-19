const AvionService = require("../services/avion.services")
const PuntoService = require("../services/punto.service")
const RutasService = require("../services/ruta.service")
const VuelosService = require("../services/vuelo.service")

const vueloService = new VuelosService()
const rutaService = new RutasService()
const puntoService = new PuntoService()
const avionService = new AvionService

const getVueloController = async (idVuelo) => {
    const vuelo = await vueloService.getVueloByIdService(idVuelo)
    const ruta = await rutaService.getRutaByIdService(vuelo.id_ruta)
    const puntoOrigen = await puntoService.getPuntoByIdService(ruta.origen)
    const puntoDestino = await puntoService.getPuntoByIdService(ruta.destino)
    const avion = await avionService.getAvionByIdService(vuelo.id_avion)

    return {
        id_vuelo: vuelo.id_vuelo,
        origen: puntoOrigen.nombre_ciudad,
        destino: puntoDestino.nombre_ciudad,
        modelo_avion: avion.modelo,
        capacidad: avion.capacidad,
        horario_vuelo: vuelo.horario_vuelo,
        fecha: vuelo.fecha
    }
}

module.exports = {
    getVueloController
}

// const main = async () => {
//     const data = await getVueloController(1)
//     console.log(data);
// }

// main()