using System.Collections.Generic;

namespace _01_SentenciaForEach
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lista tipo string");
            List<string> nombres = new List<string> { "Ana", "Luis", "Carlos" };
            foreach (string nombre in nombres)
            {
                Console.WriteLine(nombre);
            }

            Console.WriteLine(" ");
            Console.WriteLine("Lista tipo int");
            List<int> numeros2 = new List<int> { 1, 2, 3, 4, 5 };
            foreach (int numero in numeros2)
            {
                Console.WriteLine(numero);
            }

            Console.WriteLine(" ");
            Console.WriteLine("Lista tipo clase persona (Se removio una persona)");
            List<People> peopleList = new List<People>
            {
                new People { Name = "Ana", Country = "Spain" },
                new People { Name = "Luis", Country = "Mexico" },
                new People { Name = "Carlos", Country = "Argentina" }
            };
            peopleList.RemoveAt(1); // Elimina a Luis de la lista
            foreach (People people in peopleList)
            {
                Console.WriteLine($"Nombre: {people.Name}, Pais: {people.Country}");
            }
        }

        class People
        {
            public string Name { get; set; }
            public string Country { get; set; }
        }

    }
}
