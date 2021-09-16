
//obtiene la referencia al contenedor main
const main = document.querySelector(".main");

/* consigue el listado de generos */
fetch(
  PelisTerror + 
    new URLSearchParams({
      api_key: api_key 
      
    })
     + sp,
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      fetchPelisTerror(item.id, item.items);
    });
  });

const fetchPelisTerror = (id, items) => {
  fetch(
    PelisTerror+ 
      new URLSearchParams({
        api_key: api_key,
        with_genres: id,
      //  page: Math.floor(Math.random() * 3) + 1, //trae pagina al azar
      })
      +sp,
   //   + filtroPG13,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      construirElementoCategoria(`${items}_movies`, data.items);
    })
    .catch((err) => console.log(err));
};

/* crea el titulo de categoria */
const construirElementoCategoria = (category, data) => {
  main.innerHTML += `
    <div class="movie-list">
        <button class="pre-btn"> <img src="img/pre.png" alt=""></button>
          
          <div class="movie-container" id="${category}">
          </div>

        <button class="nxt-btn"> <img src="img/nxt.png" alt=""> </button>
    </div>
    `;
  construirTarjetas(category, data);
};

const construirTarjetas = (id, data) => {
  const movieContainer = document.getElementById(id);
  data.forEach((item, i) => {
    if (item.backdrop_path == null) {
      item.backdrop_path = item.poster_path;
      if (item.backdrop_path == null) {
        return;
      }
    }

    movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
            <img src="${img_url}${item.backdrop_path}" alt="">
            <p class="movie-title">${item.title}</p>
        </div>
        `;

    if (i == data.length - 1) {
      setTimeout(() => {
        setupScrolling();
      }, 100);
    }
  });
};
