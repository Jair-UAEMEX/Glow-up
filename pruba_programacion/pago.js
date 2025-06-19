const corazones = document.querySelectorAll('.producto .like');
const contador = document.getElementById('contadorFavoritos');
const btnReiniciar = document.getElementById('reiniciarFavoritos');
let favoritos = 0;

function actualizarContador() {
  contador.textContent = favoritos;
}

corazones.forEach(corazon => {
  corazon.addEventListener('click', () => {
    if (corazon.classList.contains('favorito')) {
      corazon.classList.remove('favorito');
      favoritos--;
    } else {
      corazon.classList.add('favorito');
      favoritos++;
    }
    actualizarContador();
  });
});

btnReiniciar.addEventListener('click', () => {
  favoritos = 0;
  corazones.forEach(c => c.classList.remove('favorito'));
  actualizarContador();
});

actualizarContador();

// Funcionalidad del botón "Comprar"
const botonesComprar = document.querySelectorAll('.btn-comprar');
botonesComprar.forEach(boton => {
  boton.addEventListener('click', function () {
    const producto = this.closest('.producto');
    const nombre = producto.dataset.nombre;
    const imagen = producto.dataset.imagen;

    localStorage.setItem('productoNombre', nombre);
    localStorage.setItem('productoImagen', imagen);

    window.location.href = 'pago.html';
  });
});

