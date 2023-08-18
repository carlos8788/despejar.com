// Canal para la tabla 'avion'
export const useAvionHandler = (callback) => {
    window.electron.ipcRenderer.on('avion-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('avion', 'Solicitud de datos de avión');
};

// Canal para la tabla 'pasajeros'
export const usePasajerosHandler = (callback) => {
    window.electron.ipcRenderer.on('pasajeros-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('pasajeros', 'Solicitud de datos de pasajeros');
};

// Canal para la tabla 'pasaje'
export const usePasajeHandler = (callback) => {
    window.electron.ipcRenderer.on('pasaje-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('pasaje', 'Solicitud de datos de pasaje');
};

// Canal para la tabla 'vuelo'
export const useVueloHandler = (callback) => {
    window.electron.ipcRenderer.on('vuelo-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('vuelo', 'Solicitud de datos de vuelo');
};

// Canal para la tabla 'rutas'
export const useRutasHandler = (callback) => {
    window.electron.ipcRenderer.on('rutas-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('rutas', 'Solicitud de datos de rutas');
};

// Canal para la tabla 'punto'
export const usePuntoHandler = (callback) => {
    window.electron.ipcRenderer.on('punto-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('punto', 'Solicitud de datos de punto');
};


export const testCanal = (callback) => {
    window.electron.ipcRenderer.on('mi-canal-respuesta', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('mi-canal', 'Solicitud de datos de vuelo');
};

export const dbQuery = (callback, typeQuery) => {
    window.electron.ipcRenderer.on('db-res', (respuesta) => {
        callback(respuesta);
    });
    window.electron.ipcRenderer.send('db-req', typeQuery);
};