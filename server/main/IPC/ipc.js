const electron = require('electron');
const ipcMain = electron.ipcMain;
const VueloManager = require('../database/managers/vuelos.manager')

const vuelos = new VueloManager();

ipcMain.on('mi-canal', async (event, mensaje) => {
    console.log('Mensaje recibido:', mensaje);
    
    try {
        const allVuelos = await vuelos.vuelosView();
        event.reply('mi-canal-respuesta', allVuelos);
    } catch (err) {
        console.error("Error al obtener vuelos:", err);
        event.reply('mi-canal-respuesta', { error: "Error al obtener vuelos" });
    }
});

ipcMain.on('db-req', async (event, objQuery) => {
    console.log('Mensaje recibido:', objQuery);
    
    try {
        const data = await querys.getById(objQuery.id);
        event.reply('db-res', data);
    } catch (err) {
        console.error("Error al obtener vuelos:", err);
        event.reply('db-res', { error: "Error al obtener vuelos" });
    }
});

const querys = {
    getById: vuelos.getVueloById,
    getVuelos: vuelos.getVuelos
}


// const DatabaseManager = {
//     get: async (tableName) => {
//         // ... Obtener datos
//         return [];
//     },
//     post: async (tableName, payload) => {
//         // ... Insertar datos
//         return { success: true };
//     },
//     // ... otros métodos para otras acciones
// };

// ipcMain.on('database-action', async (event, { action, tableName, payload }) => {
//     const channelId = `${action}-${tableName}`;

//     try {
//         let response;

//         switch (action) {
//             case 'get':
//                 response = await DatabaseManager.get(tableName);
//                 break;
//             case 'post':
//                 response = await DatabaseManager.post(tableName, payload);
//                 break;
//             // ... manejar otras acciones
//             default:
//                 throw new Error(`Acción no reconocida: ${action}`);
//         }

//         event.reply(`${channelId}-respuesta`, response);
//     } catch (error) {
//         console.error(`Error con la acción ${action} en la tabla ${tableName}:`, error);
//         event.reply(`${channelId}-respuesta`, { error: error.message });
//     }
// });
