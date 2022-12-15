function mostrarMensaje1() {
  alert("Hola!! Soy Maribel Aizpitarte y te doy la bienvenida a mi web");
}

function makeUppercase() {
  document.form1.outstring.value = document.form1.instring.value.toUpperCase();
}
String.prototype.capitalize = function () {
  return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};

// function capWords() {
//   var inputString = document.titulo.instring;
//   var outputString = document.titulo.outstring;
//   outputString.value = inputString.value.capitalize();
// }

// function changeWords() {
//     document.getElementsById("titulo").innerHTML = "YOU CLICKED ME!";
// }

document.getElementById("titulo").onclick = function() {myFunction()};
document.getElementById("titulo2").onclick = function() {myFunction()};

function changeWords(element, color) {
    element.style.color = color;
  }