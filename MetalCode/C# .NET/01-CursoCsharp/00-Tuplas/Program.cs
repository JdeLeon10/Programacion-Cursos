namespace _00_Tuplas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Las tuplas son estructuras de datos que permiten agrupar varios valores de diferentes tipos en una sola entidad.
            (int id, string name) product = (1, "Laptop");
            // (tipodato nombre, tipo de dato nombre) nombre de variable = (valor, valor);
            Console.WriteLine($"{product.id} , {product.name}");

            // A diferencia de tipos de datos anonimos, las tuplas si permiten modificar sus valores
            product.id = 2;
            product.name = "Smartphone";
            Console.WriteLine($"{product.id} , {product.name}");

            // Otra forma de definir tuplas
            var person = (1, "Jeremy");
            Console.WriteLine($"{person.Item1} , {person.Item2}");
            person = (2, "Ana");
            Console.WriteLine($"{person.Item1} , {person.Item2}");
        }
    }
}
