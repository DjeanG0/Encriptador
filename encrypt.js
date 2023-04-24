function encriptar(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    switch (letra) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
    }
  }
  return resultado;
}

function desencriptar() {
  let mensaje = document.getElementById("mensaje").value;
  let resultado = mensaje.replace(/enter|imes|ai|ober|ufat/g, function (match) {
    switch (match) {
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  });
  return resultado;
}


let botonEncriptar = document.getElementById('encriptar');
botonEncriptar.addEventListener("click", function () {

  let mensaje = document.getElementById("mensaje").value;

  if (mensaje == "") {
    mostrarImagen();

  }
  else {
    let resultado = encriptar(mensaje);
    document.getElementById("resultado").value = resultado;
    ocultarImagen();
    mostrarBotonCopiar();
  }
});

let botonDesencriptar = document.getElementById('desencriptar');
botonDesencriptar.addEventListener("click", function () {
  let mensaje = document.getElementById("mensaje").value;

  if (mensaje == "") {
    mostrarImagen();
  }

  else {
    let resultado = desencriptar(mensaje);
    document.getElementById("resultado").value = resultado;
    ocultarImagen();
    mostrarBotonCopiar();
  }
});


/*
funcion para el boton de copiar el texto encriptado
*/

function procesarCopiar() {
  let texto = document.getElementById("resultado").value.trim();
  if (!texto) {
    return;
  }
  copiar();
}


function copiar() {
  let texto = document.getElementById("resultado").value;

  if (texto.trim() === "") {
    return;
  }

  navigator.clipboard.writeText(texto)
  cambiarTextoBtnCopiar();
  borrarResultado();
  borrarMensaje();
  setTimeout(ocultarBotonCopiar, 2500);
}


/*
  funcion para borrar el textarea resultado
*/
function borrarResultado() {
  let texto_vacio = document.getElementById("resultado");
  texto = texto_vacio.value.trim();
  if (texto == "") {
    return;
  }
  texto_vacio.value = "";
}

/*
  funcion para borrar el texto del textarea mensaje
*/
function borrarMensaje() {
  let mensaje = document.getElementById("mensaje");
  texto = mensaje.value.trim();
  if (texto == "") {
    return;
  }
  mensaje.value = "";
}


/*
  Funciones para mostrar la imagen y el texto de advertencia en el cuadro de resultado
*/
function ocultarImagen() {
  document.getElementById("muneco").style.display = 'none';
  document.getElementById("texto-advertencia").style.display = 'none';
}

function mostrarImagen() {
  document.getElementById("muneco").style.display = 'block';
  document.getElementById("texto-advertencia").style.display = 'flex';
}


/*
  Funcion para mostrar el boton de copiar
*/
function mostrarBotonCopiar() {
  document.getElementById("copiar").style.display = 'block';
}

function ocultarBotonCopiar() {
  document.getElementById("copiar").style.display = 'none';
}


/*
  Funcion para cambiar el texto del boton de copiar
*/
function cambiarTextoBtnCopiar() {
  let btnCopiar = document.getElementById("copiar");
  setTimeout(function () {
    btnCopiar.textContent = "Texto Copiado";
    btnCopiar.style.opacity = 0.5;
  }, 500);
  setTimeout(function () {
    btnCopiar.textContent = 'Copiar';
    btnCopiar.style.opacity = 1;
  }, 2500);
}




