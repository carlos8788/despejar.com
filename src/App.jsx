import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <div>
      <button onClick={sendMessage}>Enviar mensaje</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />

        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
