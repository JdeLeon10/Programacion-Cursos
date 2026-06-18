void main() {
  // Tipos de variables
  var name = 'Jeremy';
  var age = 24;

  String greeting = 'Hello, $name! You are $age years old.';
  print(greeting);

  // Uso de constantes: const y final
  /*
    final: Se puede inicializar con valores dinámicos o calculados en tiempo de ejecución 
    (por ejemplo, obtener la hora actual con DateTime.now()). Solo se puede establecer una 
    vez y su valor no se puede cambiar después.

    const: Debe ser una constante de tiempo de compilación. Su valor debe conocerse por completo 
    antes de que el programa se ejecute. No se puede usar const con valores que dependen de 
    la ejecución del programa.
  */
  const pi = 3.14159; 
  final currentTime = DateTime.now(); 
  print('Valor de pi: $pi');
  print('Hora actual: $currentTime');

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

  Map<String, String> capitales = {
    'Francia': 'París',
    'España': 'Madrid',
    'Italia': 'Roma',
  };

  print('Capitales: $capitales');
  capitales.forEach((pais, capital) {
    print('La capital de $pais es $capital.');
  });
}