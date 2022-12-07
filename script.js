//Cosas que nos da los navegadores
//Change element properties 
const h1=document.querySelector('h1');
const p=document.getElementById('greeting');
const form=document.querySelector("#form")
const input1= document.querySelector("#calculo1")

const input2=document.querySelector('#calculo2');
const btn= document.querySelector("#btnCalcular");
const pResult= document.querySelector("#result");
/*console.log(h1);

console.log(input.value);
console.log({h1});

h1.innerText="Taylor Swift Innocent <br> jje"
//console.log(h1.getAttribute('class'))
//h1.setAttribute('class','rojo')
h1.classList.add('rojo')
h1.classList.remove('verde')


 const img= document.createElement('img');

 img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
 p.append(img);*/


 form.addEventListener("submit",btnOnClick)


 function btnOnClick(event){
    event.preventDefault();
    var number1=Number.parseInt(input1.value);
    var number2=Number.parseInt(input2.value);
    var resultado= number1+number2;
    pResult.innerText= resultado; 
 }
