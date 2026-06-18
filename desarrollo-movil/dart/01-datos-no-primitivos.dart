void main() {
  // Listas o Arrays
  List<String> frutas = ['Manzana', 'Banana', 'Naranja'];
  print('Frutas List: $frutas');
  List<int> numeros = [1, 2, 3, 4, 5];
  print('Números List: $numeros');

  // Sets vs Lists : Sets no tiene elementos duplicados y no tiene orden
  Set<String> colores = {'Rojo', 'Verde', 'Azul', 'Rojo'};
  print('Colores Set: $colores'); // Solo se imprimirá una vez

  // Mapas o Diccionarios
  Map<String, int> edades = {'Alice': 30, 'Bob': 25, 'Charlie': 35};
  print('Edades Map: $edades');

  // Iterable
  Iterable<String> mayusculas = frutas.map((fruta) => fruta.toUpperCase());
  print('Frutas en mayúsculas Iterable: $mayusculas');
}
