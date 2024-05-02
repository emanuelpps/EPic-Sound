"use client";
import StartContainer from "@/app/components/Home/StartContainer";
import React, { useState } from "react";

function HomePage() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (
        // hacer un chequeo si esta logeado... mientras cargar un loading / si se esta logeado mostrar inicialmente la pantalla de start y luego redirijir a la home
        <StartContainer />
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
