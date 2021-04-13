
//uso modo estricto
'use strict'

var valor= 5+10;
console.log(valor);


//imprimir en consola y documento
console.log("Hola mundo");
document.write("<h1>Hola mundo en Javascript</h1>");

//tipo de dato

var hello= "Helo word";
hello=hello+",desde js"
console.log(hello);

var numero1=4;
var numero2=5;

console.log("la ssuma es"+(numero1+numero2));


//boolean
var boolean = true;
if(10>6 && boolean==true){
    console.log(true)
}else{
    console.error("error")
}

//swich
var tipoTarjeta= "Credit Card"

switch (tipoTarjeta){
case 'Debit Card':
    console.log("Credit cards")
    break;
case 'Credit Card':
    console.log("Tarjeta de credito")
    break;
default: console.log("No valido")
}


var nombres= ['joe', 'gama','Sim'];
console.log(nombres);
nombres[1]= 'cesar';

/*
console.log(nombres);
var nombresCopia= nombres;
console.log(nombres);

console.log(nombresCopia);
*/

var nombre2= ['joe2', 'gama2', 'Sim2'];
nombres= nombres.concat(nombre2) ;
console.log(nombres);
nombre2.splice(3);
console.log(nombre2);
nombre2.push('Ricardo');
console.log(nombre2);
//corta solo un elemento a partir de la posicion 2
nombre2.splice(2,1);
console.log(nombre2);

//Ciclos

for (let i = 0; i < nombres.length; i++) {
    console.log("Elemento:"+i+":"+nombres[i]);    
}

console.log("-----------------------------------------");
nombres.forEach(element =>{
    console.log("foreach:"+element);
});

console.log("-----------------------------------------");


var contador=0;
while (contador<nombres.length){
    console.log("while:"+nombres[contador]);
    contador++;
}

console.log("-----------------------------------------");

//objetos

var objetoUsr= {
    "username":"Ryan",
    "score":70,
    "hours":100,
}

console.log(objetoUsr);
objetoUsr.profesional= true;

console.log(objetoUsr);

//crear objeto con clase padre Object

var objetoUsr2= new Object();
objetoUsr2.username= "Cesar";
objetoUsr2.score=100;
objetoUsr2.hours=58;
objetoUsr2.profesional=false;

console.log(objetoUsr2);

//clase
class Usuario{
    constructor(username,score, hours, profesional){
        this.username=username;
        this.score=score;
        this.hours=hours;
        this.profesional=profesional;
    }
    //metodos
    getName(){
        return this.username;
    }

    setName(nombre){
        this.username= nombre;
    }
}


var objetoUsr3 = new Usuario("Alfredo",100,300,true);
console.log(objetoUsr3);
objetoUsr3.setName("Maria");
console.log(objetoUsr3.getName());

//Alcance de variables var vs let
//let tiene alcance dentro de bloque y var es global

var a=5;
var b= 10;



if(a==5){
    let a=4;//alcance l= dentro de if
    var b=1;//alcance global
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);




//constanbtes

const PI=3.1416;
console.log(PI);
//PI=4;

document.write(PI+"<br>");
document.write(objetoUsr3+"<br>");
document.write(objetoUsr3.username+"<br>");

document.getElementById('username').value= objetoUsr3.username;

document.getElementById("botonDes").innerText="Desactivar";

function desactivarBtn(){
    let opc= prompt("Desactivar?" + "1:Si, 0:No")

    if(opc=="1"){
        document.getElementById("botonDes").disable= true;
        document.getElementById("act").innerText="Boton inactivo";
        document.getElementById("botonAct").hidden= false;

    }
    
}

function activarBtn(){

}


document.getElementById("Mih1").innerText= "sin nombre";

function escribirDatosClick(elementoH1){
    let nombre = prompt("¿Cuál es tu nombre?");
    elementoH1.innerText= "Hola " + nombre;
}

escribirDatos();
function escribirDatos(){
    prompt("Terminar de cargar página");
}

window.onload=escribirDatos();
    console.log("Se ha terminado de cargar la página");