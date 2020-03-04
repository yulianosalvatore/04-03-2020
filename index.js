const select = document.querySelector('#filter')
const contenedor = document.querySelector('#contenedor')
const mostrarprimero = document.querySelector('#mostrarprimero')
const ordenadorselect = document.querySelector('#ordenador')
var noticia = { imagen: 'https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png' }

var productos = [

  {
    imagen: 'https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png',
    titulo: 'LaLiga',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/leagueColoredCompetition/128/18.png',
    titulo: 'Copa del Rey',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/leagueColoredCompetition/128/5.png',
    titulo: 'Champions League',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/leagueColoredCompetition/128/9.png',
    titulo: 'Premier League',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/teams/164/26.png',
    titulo: 'Real Madrid',
    clase: 'Páginas populares'
  },
  {

    imagen: 'https://images.onefootball.com/icons/teams/164/5.png',
    titulo: 'FC Barcelona',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/teams/164/3.png',
    titulo: 'Atlético de Madrid ',
    clase: 'Páginas populares'
  },
  {
    imagen: 'https://images.onefootball.com/icons/teams/164/143.png',
    titulo: 'Valencia ',
    clase: 'Páginas populares'
  }
]


function refrescarLista() {

  let contenido = ''
  let con = ''
  productos.forEach(function (producto) {
    contenido += dibujarProducto(producto)
    con += dibujarProducto1(producto)

  })
  contenedor.innerHTML = contenido
}

function dibujarProducto(producto) {



  return `<div class="col-md   ${producto.clase}">
    <img class="col-md-12" src="${producto.imagen}" alt="${producto.clase}" />
     <span>${producto.titulo}</span> 
  </div>`
}
function dibujarProducto1(producto) {



  return `<img class="col-md-12" src="${producto.imagen}" alt="${producto.clase}" />
  </div>`
}
refrescarLista()
