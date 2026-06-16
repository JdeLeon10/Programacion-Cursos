void main() {
  // Tipos de variables
  var name = 'Jeremy';
  var age = 24;

  String greeting = 'Hello, $name! You are $age years old.';
  print(greeting);

  // Condicionales
  if (age >= 18) {
    print('You are an adult.');
  } else {
    print('You are a minor.');
  }

  int contador = 0;
  while (contador <= 5) {
    print('Contador: $contador');
    contador++;
  }

  // Funciones
  int suma(int a, int b) {
    return a + b;
  }

  int resultado = suma(5, 3);
  print('La suma de 5 y 3 es: $resultado');

  // Listas o Arrays
  List<String> frutas = ['Manzana', 'Banana', 'Naranja'];
  print('Frutas: $frutas');
  List<int> numeros = [1, 2, 3, 4, 5];
  print('Números: $numeros');

  for (var fruta in frutas) {
    print('Fruta: $fruta');
  }

  numeros.forEach((numero) {
    print('Número: $numero');
  });

  // Forma corta:
  numeros.forEach((numero) => print('Número: $numero'));

  // Sets vs Lists : Sets no tiene elementos duplicados y no tiene orden
  Set<String> colores = {'Rojo', 'Verde', 'Azul', 'Rojo'};
  print('Colores: $colores'); // Solo se imprimirá una vez 'Rojo'

  // Mapas o Diccionarios
  Map<String, int> edades = {'Alice': 30, 'Bob': 25, 'Charlie': 35};

  print('Edades: $edades');
  edades.forEach((nombre, edad) {
    print('$nombre tiene $edad años.');
  });
  print('Edad de Alice: ${edades['Alice']}');
}
