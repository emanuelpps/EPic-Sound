'use client';
import React, { useState } from "react";

function HomePage() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (
        <div>comprobar si esta ok el login si es asi abrir el home</div>
      ) : (
        <div>
          LOGIN /// mandar a pantalla de login si no tiene login enviar a
          registrase
        </div>
      )}
    </div>
  );
}

export default HomePage;
