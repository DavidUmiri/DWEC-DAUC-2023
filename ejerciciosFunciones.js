function buscar() {
  let texto = document.getElementById("textprincipal").innerHTML;
  let palabra = document.getElementById("idText").value;

  if (palabra === "") {
    alert("Campo vacío");
  } else {
    palabra = palabra.toLowerCase();
    alert("Se ha encontrado la palabra: " + texto.includes(palabra));
  }
}
