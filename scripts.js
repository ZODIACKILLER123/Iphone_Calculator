function numInput(numero){
    document.querySelector('Input[name="ans"]').value += numero;
};

function calcular(){
    var input = document.querySelector('Input[name="ans"]');
    var expresion = input.value;
    var resultado = eval(expresion)
    input.value = resultado;
}

function reset(){
    document.querySelector('Input[name="ans"]').value = "0";
}
