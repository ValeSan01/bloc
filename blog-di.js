function publicar() {
  const postInput = document.getElementById("postInput");
  const publicacionesDiv = document.getElementById("publicaciones");

  // Obtener el contenido de la publicación
  const contenido = postInput.value.trim();

  // Validar que la publicación no esté vacía
  if (contenido === "") {
      alert("Por favor, escribe algo antes de publicar.");
      return;
  }

  // Crear un nuevo elemento de publicación
  const nuevaPublicacion = document.createElement("div");
  nuevaPublicacion.className = "publicacion";
  nuevaPublicacion.textContent = contenido;

  // Agregar la nueva publicación al contenedor
  publicacionesDiv.appendChild(nuevaPublicacion);

  // Limpiar el área de entrada
  postInput.value = "";
}
