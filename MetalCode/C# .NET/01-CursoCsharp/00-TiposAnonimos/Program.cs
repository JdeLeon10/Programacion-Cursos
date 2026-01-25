namespace _00_TiposAnonimos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Los objetos anónimos son tipos de datos que no tienen un nombre explícito definido por el programador.
            // Unicamente como lectura, significa que no pueden editarse
            var jeremy = new { Nombre = "Jeremy", Pais = "Guatemala" };
            Console.WriteLine($"{jeremy.Nombre} . {jeremy.Pais}");

            var people = new[]
            {
                new { Nombre = "Jeremy", Pais = "Guatemala" },
                new { Nombre = "Ana", Pais = "Colombia" },
                new { Nombre = "Pedro", Pais = "Mexico" }
            };

            Console.WriteLine("");
            foreach (var person in people)
            {
                Console.WriteLine($"{person.Nombre} . {person.Pais}");
            }
        }
    }
}
