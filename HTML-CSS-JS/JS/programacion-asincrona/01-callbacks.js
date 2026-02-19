/*
    Un callback no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción. En nuestro contexto asíncrono, un callback representa el '¿Qué quieres hacer una vez que tu operación asíncrona termine?'. Por tanto, es el trozo de código que será ejecutado una vez que una operación asíncrona notifique que ha terminado. Esta ejecución se hará en algún momento futuro, gracias al mecanismo que implementa el bucle de eventos.
*/

console.log('aparece primero');
console.log('aparece segundo');

// El setTimeout es una función de JavaScript que toma dos parámetros. El primer parámetro es otra función, y el segundo es el tiempo después el cual esa función debería ser ejecutada en milisegundos. 
setTimeout(()=>{
    console.log('aparece tercero');
},2000);

/*
    Tambien puede ser añadido a una variable:
    const myCallBack = console.log("aparece tercero");
    setTimeout(myCallBack, 2000);
*/

console.log('aparece ultimo');