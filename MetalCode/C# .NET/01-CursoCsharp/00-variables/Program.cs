namespace _00_Variables
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int edad = 24;
            string nombre = "Jeremy";
            double peso = 150.50;

            Console.WriteLine("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y peso " + peso + " libras.");

            // Usando interpolación de cadenas
            Console.WriteLine($"Hola, mi nombre es {nombre}, tengo {edad} años y peso {peso} libras.");
        }
    }
}
