/* Uso de Variáveis, Alert e Console */

//var nome = "Rafael Galleani";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";

//alert (nome + " tem " + idade + " anos.");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase()); /* letra minúscula */
//console.log(frase.toUpperCase()); /* letra maiúscula */
//alert(frase.replace("Japão", "Brasil"));

/* ---------------------------------------------------- */
/* Array */

//var lista = ["maça", "pera", "laranja"];
//list.push("uva"); /* para colocar */
//list.pop(); /* para tirar o item */
//console.log(lista);
//console.log(list.length); /* para ver o tamanho da lista */
//console.log(list.reverse); /* para inverter a ordem dos elementos dentro da lista */
//console.log(lista[0]); /* imprime o primeiro elemento */
//console.log(lista.toString()[0]); /* imprime a primeira letra da primeira string */
//console.log(lista.join(" - ")); /* acrescenta espaço e o traço */

/* ---------------------------------------------------- */
/* Dicionário */

//var fruta = {nome: "maçã", cor: "vermelha"} /* JASON */
//console.log(fruta.nome);
//alert(fruta.cor);

//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "maçã", cor: "vermelha"}]
//console.log(frutas);
//alert(frutas[1].nome);


/* ---------------------------------------------------- */
/* Condicional */

//var idade = prompt("Qual sua idade");
//=var idade = 18;
//if (idade >= 18) {
//    alert ("maior de idade");
//} else {
//   alert ("menor de idade");
//};


/* ---------------------------------------------------- */
/* Laços de Repetição */

/*
var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1; 
}; /* ou count++ */


/* ---------------------------------------------------- */
/* Laços de Repetição */

/*
var count;
for (count=0; count <= 5; count++) {
    alert(count);
}; */

/* ---------------------------------------------------- */
/* Data */

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
*/

/* ---------------------------------------------------- */
/* Desenvolva páginas web com JavaScript */

/*
function soma (n1, n2) {
    return n1 + n2;
}

function setReplace (frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert (soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/* ---------------------------------------------------- */
/* Desenvolva páginas web com JavaScript */

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/ /* é possível utilizar var global ou var local */


/* ---------------------------------------------------- */
/* function button */
function clicou() {
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar() {
    window.open("https://globallabs.academy/"); /* abre em uma nova aba */
    //window.location.href = "https://globallabs.academy/"; /*abre na mesma janela e demora mais */
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Obrigado por passar o mouse");
}

function voltar(elemebto){
    //document.getElementById("mousemove").innerHTML = "Passe mouse aqui";
    elemebto.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
