/*
    Un closure (clausura) en JavaScript es cuando una función recuerda y puede acceder a las variables de su entorno externo, incluso después de que esa función externa ya terminó de ejecutarse.

    En otras palabras: Un closure permite que una función “encierre” variables y las conserve privadas.
*/

function clousure(name){
    let count = 0;

    return function(){
        count++
        console.log(`${name} ejecutando: ${count} veces`)
    }
}

const c1 = clousure("clousure 1");
const c2 = clousure("clousure 2");
c1();
c2();
c1();
c1();
c2();
