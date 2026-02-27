/*
Try es el codigo a realizar, y catch es lo que haremos en dado caso el programa falle
Finally puede utilizarse para mostrar datos a pesar de un error
*/


try{
    console.log(variable)
} catch (e){
    console.error(`Ocurrio un error: ${e.message}`)
} finally{
    console.log("Finally se ejecuta falle o no falle el programa")
}