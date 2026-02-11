// Una funcion de orden superior es una funcion que puede recibir funciones como parametro o puede retornar funciones como resultado.
function add(x, y, fn){
    const result = x + y;
    fn(result);
}

function showResult(result){
    console.log(`El resultado es: ${result}`);
}

add(3,5, showResult); // El resultado es: 8