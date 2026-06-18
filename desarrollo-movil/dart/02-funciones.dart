void main() {
  // Funcion basica
  saludar();

  // Funcion con parametros
  sumar(5, 3);

  // Funcion con parametros declarada como funcion flecha
  restar(4, 1);

  // Funcion con parametros opcionales
  multiplicar(6); // b siempre tomara el valor por defecto de 1
  multiplicar(6, 2);

  // Funcion con parametros en desorden
  saludarPersona(nombre: 'Juan', edad: 30);
  saludarPersona(edad: 25, nombre: 'Maria');
  saludarPersona(edad: 18); // Usara los valores por defecto

  // Funcion con parametros obligatorios
  saludarPersonaObligatorio(edad: 40, nombre: 'Carlos');
}

// Funcion basica
void saludar() {
  print('Hola Mundo');
}

// Funcion con parametros
void sumar(int a, int b) {
  print('La suma es: ${a + b}');
}

// Funcion con parametros declarada como funcion flecha
void restar(int a, int b) => print('La resta es: ${a - b}');

// Funcion con parametros opcionales
void multiplicar(int a, [int b = 1]) {
  print('La multiplicacion es: ${a * b}');
}

// Funcion con parametros en desorden, las llaves tambien indican que son opcionales y se les puede asignar un valor por defecto
void saludarPersona({String nombre = 'Desconocido', int edad = 0}) {
  print('Hola $nombre, tienes $edad años');
}

// Funcion con parametros obligatorios
void saludarPersonaObligatorio({required String nombre, required int edad}) {
  print('Hola $nombre, tienes $edad años');
}
