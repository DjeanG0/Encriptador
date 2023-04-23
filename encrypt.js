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
  let resultado = encriptar(mensaje);
  document.getElementById("resultado").value = resultado;
});

let botonDesencriptar = document.getElementById('desencriptar');
botonDesencriptar.addEventListener("click", function () {
  let mensaje = document.getElementById("mensaje").value;
  let resultado = desencriptar(mensaje);
  document.getElementById("resultado").value = resultado;
});

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
  alert("Texto copiado")
  borrar();
}

function borrar() {
  let texto_vacio = document.getElementById("resultado");
  texto = texto_vacio.value.trim();
  if (texto === "") {
    return;
  }
  texto_vacio.value = "";
}
/*
function ocultarObjetos() {
  setTimeout(() => {
    let texto = document.getElementById("mensaje").value;
    let imagenVacio = document.getElementById("muneco");
    let mensajeAdvertencia = document.getElementElement("texto-advertencia");
    let textoEncriptado = document.getElementById("resultado");
    if (texto == ""){
      textoEncriptado.style.display = "none";
      imagenVacio.style.display = "none";
      mensajeAdvertencia.style.display = "none";
    }
  }, 0);
}*/
