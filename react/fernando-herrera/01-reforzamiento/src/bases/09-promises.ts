console.log("");

/*
  Sintaxis de una promesa:
  
  const myPromise = new Promise((resolve, reject) => {
    // Código asíncrono aquí
    // Si todo va bien, se llama a resolve(valor)
    // Si ocurre un error, se llama a reject(error)
  });

  myPromise.then((valor) => {
    // Código para manejar el valor resuelto
  }).catch((error) => {
    // Código para manejar el error
  });
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected!");
    resolve("Promise resolved!");
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    // Siempre se ejecutara sin importar si se resuelve o no la promesa
    console.log("Promise has been settled (either resolved or rejected).");
  });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let age = 18;

    if (age >= 18) {
      resolve("You are an adult.");
    } else {
      reject("You are a minor.");
    }
  }, 3000);
});

myPromise2
  .then((message) => {
    console.log("");
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    // Siempre se ejecutara sin importar si se resuelve o no la promesa
    console.log("Promise has been settled (either resolved or rejected).");
  });
