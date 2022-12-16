function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar")
}
function redirecionar() {
window.open("https://www.linkedin.com/feed/"); 
//window.location.href = "https://www.linkedin.com/feed/"; 
}

function trocar(elemento) {
  elemento.innerHTML = "Obrigado por passar o mouse";
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto")
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui"
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load() {
  alert("Página carregada");
}
function funcaoChange(elemento) {
  console.log(elemento.value);
  
}