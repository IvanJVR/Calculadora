function setNumber(number){
    var resultadoElement = document.getElementById("Resultado");
    resultadoElement.textContent += number;
}

function operation(operand){
    var resultadoElement = document.getElementById("Resultado");
    var pantallaElement = document.getElementById("valorEnPantalla");
    var operacionElement = document.getElementById("operacion");

    if(pantallaElement.textContent == ""){
        pantallaElement.textContent = resultadoElement.textContent + " ";
        operacionElement.textContent = operand;
        resultadoElement.textContent = "";
    }  
    else{
        pantallaElement.textContent = this.eval(operacionElement.textContent, pantallaElement.textContent, resultadoElement.textContent);
        resultadoElement.textContent = "";
        operacionElement.textContent = operand;
    }
}

function resultado(){
    var resultadoElement = document.getElementById("Resultado");
    var pantallaElement = document.getElementById("valorEnPantalla");
    var operacionElement = document.getElementById("operacion");

    resultadoElement.textContent = eval(operacionElement.textContent, pantallaElement.textContent, resultadoElement.textContent);
    pantallaElement.textContent = "";
    operacionElement.textContent = "";
}

function eval(operation, op1, op2){
    switch(operation){
        case "/":
            return parseFloat(op1) / parseFloat(op2);
        case "*":
            return parseFloat(op1) * parseFloat(op2);
        case "+":
            return parseFloat(op1) + parseFloat(op2);
        case "-":
            return parseFloat(op1) - parseFloat(op2);
        default:
            return op1;
    }   
}

function clean(){
    var resultadoElement = document.getElementById("Resultado");
    var pantallaElement = document.getElementById("valorEnPantalla");
    var operacionElement = document.getElementById("operacion");

    pantallaElement.textContent = "";
    operacionElement.textContent = "";
    resultadoElement.textContent = "";
}

