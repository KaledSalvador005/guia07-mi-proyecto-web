function saludar() {
  let nombre = document.getElementById("nombre").value.trim();
  let resultado = document.getElementById("resultado");

  if (nombre === "") {
    resultado.innerText = "Por favor, ingresa tu nombre.";
    resultado.style.color = "#e74c3c";
  } else if (nombre.length < 2) {
    resultado.innerText = "El nombre debe tener al menos 2 caracteres.";
    resultado.style.color = "#e74c3c";
  } else {
    resultado.innerText = "Hola " + nombre + ", bienvenido al sistema.";
    resultado.style.color = "#27ae60";
  }
}

function validarCorreo() {
  let correo = document.getElementById("correo").value.trim();
  let mensajeCorreo = document.getElementById("mensajeCorreo");

  if (correo === "") {
    mensajeCorreo.innerText = "Debe ingresar un correo.";
    mensajeCorreo.style.color = "#e74c3c";
    return;
  }

  let patronCorreo = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (patronCorreo.test(correo)) {
    mensajeCorreo.innerText = "Correo registrado correctamente.";
    mensajeCorreo.style.color = "#27ae60";
  } else {
    mensajeCorreo.innerText = "Ingrese un correo electrónico válido.";
    mensajeCorreo.style.color = "#e74c3c";
  }
}
