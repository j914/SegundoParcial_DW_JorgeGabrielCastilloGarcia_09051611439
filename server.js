//se usa express para manejar las rutas de las peticiones
const express = require("express");

const path = require("path");

//configuramos para que el path inicial sea dentro de publico
let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));


//ruta de inicio, manda a llamar a la pagina de index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "index.html"));
});

// ruta para ir a html de peliculas por anio de estreno
app.get("/FiltAñoEstreno", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltAñoEstreno.html"));
});
// ruta para ir a peliculas mejor calificadas tipo R
app.get("/PelisRMejorCalificadas", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltPelisRMejorCalificadas.html"));
});
// ruta para ir a peliculas que estaan en exhibicion en el cine

app.get("/PelisExhibicionCine", (req, res) => {
  res.sendFile(path.join(initial_path, "PelisExhibicionCine.html"));
});
// ruta para ir a series de television 
app.get("/FiltSeriesTv", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltSeriesTv.html"));
});

// estos filtros son para clasificacion de peliculas
app.get("/FiltPelisPG", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltPelisPG.html"));
});
// PG13
app.get("/FiltPelisPG13", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltPelisPG13.html"));
});
// R
app.get("/FiltPelisR", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltPelisR.html"));
});
// aqui termina la clasificacion de peliculas

// para categoria de peliculas
app.get("/FiltCategoriaAccion", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltCategoriaAccion.html"));
});
// suspenso
app.get("/FiltCategoriaSuspenso", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltCategoriaSuspenso.html"));
});
//comedia
app.get("/FiltCategoriaComedia", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltCategoriaComedia.html"));
});
// accion
app.get("/FiltCategoriaAccion", (req, res) => {
  res.sendFile(path.join(initial_path, "FiltCategoriaAccion.html"));
});

//esta es la ruta para desplegar about.html, se lanza con la direccion
//de la id de la pelicula
//ejemplo: localhost:3000/32456
app.get("/:id", (req, res) => {
  res.sendFile(path.join(initial_path, "about.html"));
});

app.use((req, res) => {
  res.json("404");
});

//inicia express en el puerto 3000
app.listen(3000, () => {
  console.log("EScuchando en puerto 3000");
});
