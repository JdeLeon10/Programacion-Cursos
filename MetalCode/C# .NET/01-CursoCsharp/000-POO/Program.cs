namespace _000_POO
{
    internal class Program
    {
        //public = Ejecucion publica
        //protected = Ejecucion en hijos para herencia
        //private = Ejecucion solo en la misma clase
        static void Main(string[] args)
        {
            // Creacion de primer objeto
            Persona jeremy = new Persona();
            jeremy.nombre = "Jeremy";
            jeremy.edad = 25;
            jeremy.Saludar();

            // Creacion de segundo objeto utilizando constructor, debemos pasar parametros
            Carro miCarro = new Carro("Kia", "Sportage", 2016);
            miCarro.MostrarInfo();
            miCarro.Acelerar();
        }
    }

    class Persona
    {
        // Atributos
        public string nombre;
        public int edad;

        // Metodo
        public void Saludar()
        {
            Console.WriteLine($"Hola mi nombre es {nombre} y tengo {edad} años");
        }
    }

    class Carro
    {
        // Atributos
        public string marca { get; set; }
        public string modelo { get; set; }
        public int año { get; set; }

        // Constructor
        public Carro(string marca, string modelo, int año)
        {
            this.marca = marca;
            this.modelo= modelo;
            this.año = año;
        }

        // Metodos
        public void MostrarInfo()
        {
            Console.WriteLine($"Marca: {marca}, Modelo: {modelo}, Año: {año}");
        }

        public void Acelerar()
        {
            Console.WriteLine("El carro está acelerando");
        }
    }
}
