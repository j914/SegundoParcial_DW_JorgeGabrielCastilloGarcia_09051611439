let api_key="dfe6fbb8d1fbc619a0a4a69145765217";
let img_url = "https://image.tmdb.org/t/p/w500";
let genres_list_http = "https://api.themoviedb.org/3/genre/movie/list?";
// filtro de discover sirve para hacer clasificacion y certificacion y filtracion de datos de peliculas.
let movie_genres_http = "https://api.themoviedb.org/3/discover/movie?";
let original_img_url = "https://image.tmdb.org/t/p/original";
let movie_detail_http = "https://api.themoviedb.org/3/movie";
// filtro de peliculas que estan en exhibicion
let FiltPelisExhibicion = 'https://api.themoviedb.org/3/movie/upcoming?';
// filtro de peliculas populares
let SeriesTv = 'https://api.themoviedb.org/3/tv/popular?';
// este filtro me funciona para poder pasar a español toda la informacion de las apis 
let sp = '&language=es-ES&page';

/* Filtros Clasificacion tipo R, PG13, PG*/ 
let ClasificacionR = '&sort_by=popularity.desc&certification_country=US&certification.lte=R&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
let ClasificacionPG13 = '&sort_by=popularity.asc&certification_country=US&certification.lte=PG-13&certification.gte=true&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
let ClasificacionPG = '&sort_by=popularity.desc&certification_country=US&certification.lte=PG&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
/*Fin del filtro */ 

/* FILTROS CATEGORIA DE PELICULAS AGREGUE 4 DE LAS 20*/ 

let PelisAccion = 'https://api.themoviedb.org/3/list/28?';
let PelisSuspenso = 'https://api.themoviedb.org/3/list/53?';
let PelisTerror = 'https://api.themoviedb.org/3/list/27?';
let PelisComedia = 'https://api.themoviedb.org/3/list/35?';
/* FIN DE LOS FILTROS CATEGORIA */

// filtro de peliculas mejor calificadas clasificacion R
let PelisRMejorCalificadas = '&sort_by=popularity.desc&certification_country=US&certification.lte=R&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate';
// series de television populares
let tv_popular = 'https://api.themoviedb.org/3/tv/popular?';
// filtro para agregar la region 
let region = '&region=US';
//https://api.themoviedb.org/3/search/movie?api_key=dfe6fbb8d1fbc619a0a4a69145765217&language=en-US&query=%2Fmovie&page=1&include_adult=false&year=2017

//filtro pg13
let filtroPG13 = '&sort_by=popularity.asc&certification_country=US&certification.lte=PG-13&certification.gte=true&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
/*filtro de peliculas que se muestran por año de estreno*/
let añoEstreno = '&region=US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&primary_release_date.gte=2021-01-02&primary_release_date.lte=2021-09-09&year=2021&with_watch_monetization_types=flatrate';
