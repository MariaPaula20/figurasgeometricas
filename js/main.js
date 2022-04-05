function fcirculo(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("circulo");

}

function frombo(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("rombo");
}

function frectangulohorizontal(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("rectangulohorizontal");
}

function frectangulovertical(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("rectangulovertical");
}

function fimagen(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("imagen");
}

function arriba(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("subir");
}

function abajo(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("bajar");
}

function izquierda(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("izquierda");
}

function derecha(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("derecha");
}

function diagonal(){
    var selector = document.getElementById ("figura");
    selector.className='';
    selector.classList.toggle("diagonal");
}

//EJERCICIO2

function operaciones(){
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);

    var operacion = document.getElementById("operaciones").value;
    switch (operacion) {
        case "+":
            resultado = a + b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "-":
            resultado = a - b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "*":
            resultado = a * b;
            document.getElementById("respuesta").value = resultado; 
            break; 
        case "/":
            resultado = a / b;
            document.getElementById("respuesta").value = resultado;  
            break;
    }
}

//EJERCICIO3
function chatActive(){
    var selector = document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2 = document.getElementById("btnChat");
    selector2.classList.toggle("active");
}
