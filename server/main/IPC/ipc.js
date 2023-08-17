const electron = require('electron');
const ipcMain = electron.ipcMain;
const VueloManager = require('../database/managers/vuelos.manager')


const vuelos = new VueloManager();

const main = async () => {
  const allVuelos = await vuelos.getVuelos();
  
  ipcMain.on('mi-canal', (event, mensaje) => {
    console.log('Mensaje recibido:', mensaje);
    // Puedes responder a la ventana de renderizado aquí si lo deseas
    event.reply('mi-canal-respuesta', allVuelos);
  });
};
module.exports = main;

const DatabaseManager = {
    get: async (tableName) => {
        // ... Obtener datos
        return [];
    },
    post: async (tableName, payload) => {
        // ... Insertar datos
        return { success: true };
    },
    // ... otros métodos para otras acciones
};

ipcMain.on('database-action', async (event, { action, tableName, payload }) => {
    const channelId = `${action}-${tableName}`;
    
    try {
        let response;

        switch (action) {
            case 'get':
                response = await DatabaseManager.get(tableName);
                break;
            case 'post':
                response = await DatabaseManager.post(tableName, payload);
                break;
            // ... manejar otras acciones
            default:
                throw new Error(`Acción no reconocida: ${action}`);
        }

        event.reply(`${channelId}-respuesta`, response);
    } catch (error) {
        console.error(`Error con la acción ${action} en la tabla ${tableName}:`, error);
        event.reply(`${channelId}-respuesta`, { error: error.message }); 
    }
});
