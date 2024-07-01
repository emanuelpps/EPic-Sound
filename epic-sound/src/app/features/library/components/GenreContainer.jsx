import React from "react";

function GenreContainer() {
  return (
    <div id="genre-container">
      <div id="genre-box-container" className="ml-24">
        <div id="genre-box-container-title">
          <h1>Genre</h1>
        </div>
        <div id="boxes-container" className="flex">
          <div id="box-genre" className="bg-slate-500 p-16 rounded-md">
            <h2>Genero</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreContainer;
