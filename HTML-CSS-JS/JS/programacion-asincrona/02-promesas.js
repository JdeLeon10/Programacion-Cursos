/*
    Una promesa es algo que tomará algún tiempo en hacerse. Hay dos resultados posibles de una promesa:

        O ejecutamos y resolvemos la promesa, o
        Algún error ocurre a lo largo de la línea y la promesa es rechazada
    
    Las promesas vinieron para resolver los problemas de las funciones callback. Una promesa toma dos funciones como parámetros. Eso es, resolve y reject. Recuerda que resolve es éxito, y reject es para cuando un error ocurre.
*/



const obtenerDatos = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //alguna peticion al endpoint;
     
     if(peticionEsExitosa){
       //hace algo;
       resolve();
     }
     else if(hayUnError){
       reject();
     }
   
   });
};

/*
    Después de hacer una llamada al endpoint por ejemplo, si la petición es exitosa, resolveríamos la promesa y continuaríamos haciendo lo que quisiéramos con la respuesta. Pero si hay un error, la promesa será rechazada.
*/