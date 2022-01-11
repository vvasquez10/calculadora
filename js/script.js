/*erores por solucionar
    - No se pueden combinar operaciones.
    - Display intermedio me debe dar el resultado parcial. (ya no será necesario clr():23)
    - Si pulso más de 1 vez alguna operacion, muere.     
*/

let operacionActual = "";
let ultimoNumero = 0;
let resultado = 0;
let onOperation = false;

function press(number){
    onOperation=true;
    displayNum=getDisplay();
    if(displayNum=="0"){show(number);}
    else{show(displayNum+number);}    
}

function setOP(operation){
    switch(operation) {
        case "+":
            if(onOperation){
                operacionActual = operation;            
                resultado = resultado + parseInt(getDisplay());   
                console.log(resultado);
                $("#display").text("0");
            } else{
                onOperation=true;
                operacionActual = operation;
                show("0");
            }
            break;
        case "-":
            if(onOperation){                      
                operacionActual = operation; 
                resultado = resultado - parseInt(getDisplay());
                console.log(resultado);
                $("#display").text("0");
            } else{
                onOperation=true;
                operacionActual = operation;   
                show("0");
            }
            break;
        case "*":
            if(onOperation){
                operacionActual = operation;
                if(resultado===0){
                    resultado = parseInt(getDisplay());
                } else{
                    resultado = resultado * parseInt(getDisplay());
                }          
                console.log(resultado);
                $("#display").text("0");
            } else{
                onOperation=true;
                operacionActual = operation;   
                show("0");
            }
            break;
        case "/":
            if(onOperation){
                operacionActual = operation;            
                resultado = resultado / parseInt(getDisplay());   
                console.log(resultado);
                $("#display").text("0");
            } else{
                onOperation=true;
                operacionActual = operation;   
                show("0");
            }
            break;
        default:
            // code block
      }
}

function calculate(){
    switch(operacionActual){
        case "+":
            resultado = resultado + parseInt(getDisplay());
            console.log(resultado);
            show(resultado);
            onOperation=false;
        break;
        case "-":
            resultado = resultado - parseInt(getDisplay());
            console.log(resultado);
            show(resultado);
            onOperation=false;
        break;
        case "*":
            resultado = resultado * parseInt(getDisplay());
            console.log(resultado);
            show(resultado);
            onOperation=false;
        break;
        case "/":
            resultado = resultado / parseInt(getDisplay());
            console.log(resultado);
            show(resultado);
            onOperation=false;
        break;
    }
}

function clr(){
    $("#display").text("0");
    resultado=0;
    onOperation=false;
}

function show(element){
    $("#display").text(element)
}

function getDisplay(){
    return $("#display").text();
}

/*
function actualizarResultado(){
    return $("#display").text();
}
*/