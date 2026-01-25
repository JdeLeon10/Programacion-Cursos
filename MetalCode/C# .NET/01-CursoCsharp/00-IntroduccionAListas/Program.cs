using System.Collections.Generic;

namespace _00_IntroduccionAListas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Diferencia entre arreglos y listas: las listas son dinamicas
            List<int> numeros = new List<int>();
            numeros.Add(10);
            numeros.Add(20);
            Console.WriteLine($"La lista uno tiene un total de {numeros.Count} elementos");

            List<int> numeros2 = new List<int> { 1, 2, 3, 4, 5 };
            Console.WriteLine(numeros2.Count);
            numeros2.Add(6);
            Console.WriteLine(numeros2.Count);
            numeros2.Clear();
            Console.WriteLine(numeros2.Count);

            List<string> nombres = new List<string> { "Ana", "Luis", "Carlos" };
            foreach (string nombre in nombres)
            {
                Console.WriteLine(nombre);
            }
        }
    }
}
