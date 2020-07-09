//fetch = require("node-fetch")//testes com node
//resultante = require("./teste3")


 


array1 = []

for(var i = 0;i <500;i++){
    array1.push(i)
}



//console.log(array1)

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  
var resultadoFinal = []

  shuffle(array1);
  for(var index = 0;index <25;index++){
    resultadoFinal.push(array1[index])
    
    //  for(var n = 0;n< resultadoFinal.length;n++){
    //    arrayResultadoFinal.push(resultadoFinal)
    //  }

     //console.log(arrayResultadoFinal)
      //return resultadoFinal - caso o arquivo inteiro fosse funcao
    }






//importante->//console.log(resultadoFinal)

//for(var j = 0;j<25;j++){
// }


    //   //var numeroAleatorio = 1 numeroAleatorio()// function numeroAleatorio(){

//https://pokeapi.co/api/v2/pokemon?offset=20&limit=50
//const urlDaApi = "https://pokeapi.co/api/v2/pokemon/ditto"

for(var j = 0;j<resultadoFinal.length;j++){
const urlDaApi = `https://pokeapi.co/api/v2/pokemon/${resultadoFinal[j]}`
//uma chamada de api para nome,outra figura,outra preço
//console.log(urlDaApi)
//const urlDaApi = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=50"
fetch(urlDaApi).then(function(transfomarPromisseEmJson){
    transfomarPromisseEmJson.json().then(function(resultadoFinalPr){
        //console.log(transfomarPromisseEmJson)
        //console.log(resultadoFinalPr.name)
        //console.log(resultadoFinalPr.sprites.front_default)
        let preco = Math.floor(Math.random()*205 + 1)
        //console.log(preco)
        
    

        

// 1. Create <div> element
let div = document.createElement('div');
// 2. Set its class to "alert"
div.className = "classePokemons";
div.style.flex
// Fill it with the content
div.innerHTML = `

<strong>Nome do Pokemon:</strong> ${resultadoFinalPr.name} 

<img src ="${resultadoFinalPr.sprites.front_default}"> 
<h3>Preço:${preco},00</h3>

<button type="button" onclick="funcao()" >Quero este!</button>

`
document.body.append(div);
//console.log(resultadoFinalPr.name)

        //console.log(resultadoFinal.types)
        //types seria preço,que sera aleatorio
    
    })    
})
}








// function funcao(){
//   document.getElementById("textoTituloCarrinho").innerText = 
//           //textContent
//           "Carrinho: " + document.getElementsByClassName("classePokemon").text
//           + " aew"
          
//           var testes = document.getElementsByClassName("classePokemon").textContent
//           console.log(testes)
// }

// // 1. Create <div> element
// let div = document.createElement('div');

// // 2. Set its class to "alert"
// div.className = "alert";

// // Fill it with the content
// div.innerHTML = `<strong>Hi there!</strong> ${resultadoFinalPr.name}.`

// document.body.append(div);

// var botao = document.createElement("BUTTON")
// document.body.appendChild(botao) 



//   var botao = document.createElement("BUTTON")
//   document.body.appendChild(botao)

// for (var a=[],i=0;i<40;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890

// function shuffle(array) {
//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;
// }

// a = shuffle(a);

// console.log(a)

//se for possivel chamar o pokemon na api via id,
//deve ser possivel usar numeros aleatorios de 1 a 20 no endpoint
//Não basta numero aleatorios,preciso listar aleatoriamente (de 200) de 1 a 25

//nome,figura,imagem(faça primeiro via console,por ultimo em pagina)
//carrinho

//Preciso criar uma lista de 25 numeros que podem ir de 0 a 200.
//posso dar console em 3 coisas (:


// function numeroAleatorio(){
//     numeroAleatorio = Math.floor(Math.random()*25 + 1)
//    //console.log(numeroAleatorio) 
//    return
   
//    }
   
//    numeroAleatorio()

