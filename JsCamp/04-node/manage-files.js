// Utilizando el sistema de modulos de nodejs para leer y escribir archivos
import { readFile, writeFile } from 'node:fs/promises';

// Leer el contenido de un archivo de texto de manera asincrona
const content = await readFile('./archivo.txt', 'utf-8');
console.log(content);

// Escribir el contenido en mayusculas en un nuevo archivo
const uppercaseContent = content.toUpperCase();
await writeFile('./archivo-mayusculas.txt', uppercaseContent);
console.log('Archivo creado y escrito con exito');

// Creacion de una carpeta
import { mkdir } from 'node:fs/promises';
await mkdir('./nueva-carpeta', { recursive: true }); // recursive true evita que se cree algo que ya existe
console.log('Carpeta creada con exito');

// Eliminacion de un archivo
/*
import { unlink } from 'node:fs/promises';
await unlink('./archivo-a-eliminar.txt'); // nombre del archivo a eliminar
console.log('Archivo eliminado con exito');
*/