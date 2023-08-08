// Layout.jsx
import React from 'react';
import { Header } from './components/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header /> {/* Tu componente de navegación */}
      <main>{children}</main> {/* El contenido de la página actual */}
      {/* Aquí puedes agregar un pie de página u otros elementos comunes */}
    </>
  );
};
