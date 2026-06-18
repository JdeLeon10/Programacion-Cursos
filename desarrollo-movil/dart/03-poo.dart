void main() {
  Persona persona1 = Persona('Alice', 30);
  Persona persona2 = Persona('Bob', 25);

  persona1.saludar();
  persona2.saludar();

  //

  Vehiculo vehiculo1 = Vehiculo('Toyota', 'Corolla');
  Vehiculo vehiculo2 = Vehiculo('Honda', 'Civic');

  vehiculo1.mostrarInfo();
  vehiculo2.mostrarInfo();

  // Herencia
  Estudiante estudiante1 = Estudiante('Charlie', 20, 'Ingeniería');
  estudiante1.saludar(); // Método heredado de Persona
  estudiante1.estudiar(); // Método específico de Estudiante
}

class Persona {
  // Atributos
  String nombre;
  int edad;

  // Constructor
  Persona(this.nombre, this.edad);

  // Método
  void saludar() {
    print('Hola, mi nombre es $nombre y tengo $edad años.');
  }
}

class Vehiculo {
  String marca;
  String modelo;

  Vehiculo(this.marca, this.modelo);

  void mostrarInfo() {
    print('Vehículo: $marca $modelo');
  }
}

// Herencia: Clase Hija que hereda de Persona
class Estudiante extends Persona {
  String carrera;

  Estudiante(String nombre, int edad, this.carrera)
    : super(nombre, edad); // Llamada al constructor de la clase padre

  void estudiar() {
    print('$nombre está estudiando $carrera.');
  }
}
