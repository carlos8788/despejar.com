import { useState, useEffect } from 'react'
import { Home } from './pages/Home';


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleResponse = (respuesta) => {
      console.log(respuesta);
    };

    window.electron.ipcRenderer.on('mi-canal-respuesta', handleResponse);

    // Enviar un mensaje inicial
    window.electron.ipcRenderer.send('mi-canal', 'mi-mensaje');

    // Eliminar el oyente del evento cuando el componente se desmonte
    return () => {
      window.electron.ipcRenderer.removeAllListeners('mi-canal-respuesta', handleResponse);
    };
  }, []); //
  function sendMessage() {
    window.electron.ipcRenderer.send('mi-canal', 'mi-mensaje');
  }
  return (
    <>
    <Home/>
    </>
  )
}

export default App
