// Función para cambiar imagen en galería - Mejorada para múltiples galerías
function cambiarImagen(miniatura) {
  // Encuentra el contenedor de galería más cercano
  const galeria = miniatura.closest('.gallery');
  
  // Busca la imagen principal dentro de esta galería
  const imagenPrincipal = galeria ? galeria.querySelector('.main-img') : null; // Modificado para buscar siempre dentro de la galería
  
  if (imagenPrincipal) {
    imagenPrincipal.src = miniatura.src;
    imagenPrincipal.alt = miniatura.alt;
    
    // Remover clase active de todas las miniaturas en esta galería
    const miniaturas = galeria.querySelectorAll('.thumbnail');
    miniaturas.forEach(img => {
      img.classList.remove('active');
    });
    
    // Agregar clase active a la miniatura clickeada
    miniatura.classList.add('active');
  }
}

// Función para manejar el envío del formulario de pedidos
document.addEventListener('DOMContentLoaded', function() {
  const formularioPedido = document.getElementById('formularioPedido');
  
  if(formularioPedido) {
    formularioPedido.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const telefono = document.getElementById('telefono').value;
      const direccion = document.getElementById('direccion').value;
      const email = document.getElementById('email').value;
      const producto = document.getElementById('producto').value;
      const cantidad = document.getElementById('cantidad').value;
      const notas = document.getElementById('notas').value;
      
      // Crear cuerpo del correo
      const cuerpoCorreo = `
        Nombre: ${nombre}
        Teléfono: ${telefono}
        Dirección: ${direccion}
        Email: ${email}
        Producto: ${producto}
        Cantidad: ${cantidad}
        Notas adicionales: ${notas || 'Ninguna'}
      `;
      
      // Enviar correo (simulado - en producción usar un servicio como EmailJS o backend)
      console.log('Enviando pedido a alexanderportillo403@gmail.com');
      console.log(cuerpoCorreo);
      
      // Mostrar mensaje de éxito
      alert('¡Pedido enviado con éxito! Nos comunicaremos contigo pronto.');
      
      // Resetear formulario
      this.reset();
    });
  }
  
  // Activar primera miniatura al cargar en *cada* galería (mejorado para que funcione por galería)
  document.querySelectorAll('.gallery').forEach(gallery => {
    const firstThumbnail = gallery.querySelector('.thumbnail');
    if (firstThumbnail) {
      firstThumbnail.classList.add('active');
    }
  });
  
  // Toggle para el menú lateral
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) { // Asegura que el sidebar existe
    const toggleSidebar = document.createElement('button');
    toggleSidebar.className = 'toggle-sidebar';
    toggleSidebar.innerHTML = '<i class="fas fa-chevron-left"></i>';
    sidebar.appendChild(toggleSidebar);
    
    toggleSidebar.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      
      // Cambiar icono según estado
      const icon = this.querySelector('i');
      if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
      } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
      }
    });
  }
  
  // Para móviles: botón de menú alternativo
  if (window.innerWidth <= 480) {
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileToggle);
    
    mobileToggle.addEventListener('click', function() {
      if (sidebar) { // Asegura que el sidebar existe antes de intentar modificarlo
        sidebar.classList.toggle('active');
      }
    });
  }
});
