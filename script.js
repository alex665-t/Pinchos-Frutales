// script.js - Contiene toda la funcionalidad JavaScript del sitio

// Función para cambiar la imagen principal en la galería de inicio
function cambiarImagen(miniatura) {
  // Obtiene la imagen principal por su ID
  const imagenPrincipal = document.getElementById('mainImage');
  
  // Cambia la fuente de la imagen principal por la de la miniatura clickeada
  imagenPrincipal.src = miniatura.src;
  
  // Cambia el texto alternativo por el de la miniatura
  imagenPrincipal.alt = miniatura.alt;
  
  // Remueve la clase 'active' de todas las miniaturas
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.classList.remove('active');
  });
  
  // Agrega la clase 'active' a la miniatura clickeada
  miniatura.classList.add('active');
}

// Función para cambiar la imagen en la galería de la página Galería
function cambiarImagenGaleria(miniatura) {
  // Similar a la función anterior pero para la página de galería
  const imagenGaleria = document.getElementById('galeriaImagen');
  imagenGaleria.src = miniatura.src;
  imagenGaleria.alt = miniatura.alt;
  
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.classList.remove('active');
  });
  
  miniatura.classList.add('active');
}

// Función para manejar el envío del formulario de pedidos
document.getElementById('formularioPedido')?.addEventListener('submit', function(event) {
  // Previene el envío tradicional del formulario
  event.preventDefault();
  
  // Muestra mensaje de éxito (en una implementación real aquí se enviarían los datos a un servidor)
  alert('¡Pedido enviado con éxito! Nos comunicaremos contigo pronto.');
  
  // Resetea el formulario
  this.reset();
});

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Activa la primera miniatura en las galerías al cargar
  
  // Para la galería de inicio
  const primeraMiniaturaInicio = document.querySelector('.gallery .thumbnail');
  if (primeraMiniaturaInicio) {
    primeraMiniaturaInicio.classList.add('active');
  }
  
  // Para la galería de la página Galería
  const primeraMiniaturaGaleria = document.querySelector('#galeria .thumbnail');
  if (primeraMiniaturaGaleria) {
    primeraMiniaturaGaleria.classList.add('active');
  }
});