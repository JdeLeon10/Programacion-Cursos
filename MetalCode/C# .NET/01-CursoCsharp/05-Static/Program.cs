using System.Security.Cryptography.X509Certificates;

namespace _05_Static
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Static hace que algo sea perteneciente a la clase (tipo) y no a la instancia

            People people1 = new People()
            {
                Name = "Jeremy",
                Age = 24
            };

            People people2 = new People()
            {
                Name = "Alejandro",
                Age = 24
            };

            // Recorre el metodo desde la clase, no desde el objeto, cada vez que se crea una instancia, se incrementa el contador
            Console.WriteLine(People.Count);
            Console.WriteLine(People.GetCount());
        }
    
        public class People
        {
            public static int Count = 0; // Pertenece a la clase People y no a las instancias
            public string Name { get; set; }
            public int Age { get; set; }

            public People()
            {
                People.Count++; // Cada vez que se crea una instancia, se incrementa el contador
            }

            
            public static string GetCount()
            {
                return $"Hay {Count} personas creadas.";
            }
        }
    }
}
