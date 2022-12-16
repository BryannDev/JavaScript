function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(Idade) {
  var validar;
  if (Idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
//var lista = ("", "", "", "", "", "", "");
//var nome = "Bryan Soares";
//var idade = 21;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace ("Japão", "Brasil"));
   