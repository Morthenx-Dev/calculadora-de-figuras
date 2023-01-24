function mostrarRespuesta(parametro){
    const respuesta = document.getElementById("output");
    respuesta.innerText = parametro;
}

//funiones del cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    let perimetro = "el parimetro del cuadrado es: " + (value*4);
    mostrarRespuesta(perimetro)
}

function calcularAreaCuadrado(){
    const input = documet.getElementById("InputCuadrado");
    const value = input.value;
    
    let area = value*value;
    alert("el area del cuadrado es: " + area);
}

// datos pedidos para el triangulo

const input1 = document.getElementById("Inputlado1");
const lado1 = input1.value;
const input2 = document.getElementById("InputHipotenusa");
const lado2 = input2.value;
const input3 = document.getElementById("InputBase");
const lado3 = input3.value;

//funciones del triangulo

function perimetroTriangulo(lado1, lado2, lado3){
    const perimetro = lado1 + lado2 + lado3;
    alert(`el perimetro del tiangulo es: ${perimetro}`);
}

function angulosTriangulo(lado1, lado2, lado3){
    let angulo1 = Math.asin(((lado3 ** 2)+(lado1 ** 2)-(lado2 ** 2)) / (2 * lado3 + lado1));
    let angulo2 = Math.asin(((lado2 ** 2)+(lado1 ** 2)-(lado3 ** 2)) / (2 * lado2 + lado3));
    let angulo3 = Math.asin(((lado2 ** 2)+(lado3 ** 2)-(lado1 ** 2)) / (2 * lado2 + lado3));
    alert("los angulos son: " + angulo1 + angulo2 + angulo3);
}

function areaTriangulo(){
    const Area = (lado3 * altura)
}


function alturaTriangulo(lado1, lado2){
    const puntoMedio = Math.sqrt((lado1 ** 2)+(lado2 ** 2));
    let altura = (lado1 * lado2) / puntoMedio;
    alert("la altura del triangulo es: " + altura);
}

//funciones del circulo

function radioCirculo(){
    const input1 = document.getElementById("InputCirculo1");
    const radio = (input1.value)/2;
    alert("el radio del circulo es: " + radio);
    return radio;
}

function circunferenciaCirculo(){
    const input1 = document.getElementById("InputCirculo1");
    const perimetro = (input1.value)*(Math.PI);
    alert(`el perimetro del circulo es: ${perimetro}`)
}

function areaCirculo(){
    const radio = radioCirculo();
    const area = (radio**2) * Math.PI;
    alert ("el area del circulo es: " + area)
}