/*erores por solucionar    
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
                actualizarResultado(); //aqui se efectua la op anterior
                operacionActual = operation;    
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
                actualizarResultado(); //aqui se efectua la op anterior
                operacionActual = operation; 
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
                if(resultado===0){
                    resultado = parseInt(getDisplay());
                } else{
                    actualizarResultado();
                }
                operacionActual = operation;          
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
                if(resultado===0){
                    resultado = parseInt(getDisplay());
                } else{
                    actualizarResultado();
                }
                operacionActual = operation;  
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
    operacionActual="";
}

function show(element){
    $("#display").text(element)
}

function getDisplay(){
    return $("#display").text();
}

function actualizarResultado(){
    switch(operacionActual){
        case "+":
            resultado = resultado + parseInt(getDisplay());           
        break;
        case "-":
            resultado = resultado - parseInt(getDisplay());            
        break;
        case "*":
            resultado = resultado * parseInt(getDisplay());            
        break;
        case "/":
            resultado = resultado * parseInt(getDisplay());            
        break;
        case "":
            resultado = parseInt(getDisplay());            
        break;
    }
}

/*
si es la primera operacion solo debe
 igualar el resultado con el primer numero ingresado
 */