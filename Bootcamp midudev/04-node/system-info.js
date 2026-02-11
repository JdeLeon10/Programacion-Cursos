import os from 'node:os';

// Accediendo a informacion del sistema mediante el modulo os
console.log(`Sistema Operativo: ${os.type()}`);
console.log(`Version del SO: ${os.release()}`);
console.log(`Arquitectura del SO: ${os.arch()}`);
console.log(`Memoria Total: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Memoria Libre: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Uptime del Sistema: ${os.uptime()} segundos`);
console.log(`Numero de CPUs: ${os.cpus().length}`);