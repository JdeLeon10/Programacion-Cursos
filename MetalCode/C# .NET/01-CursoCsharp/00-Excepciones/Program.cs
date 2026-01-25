using System.IO;

namespace _00_Excepciones
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Leer el contenido de un archivo de texto y mostrarlo en la consola
            string content = File.ReadAllText(@"C:\Users\Jered\OneDrive\Desktop\Programacion\C# .NET\CursoC#\texto.txt");
            Console.WriteLine(content);

            // Archivo que no existe y uso de excepciones
            try
            {
                string content2 = File.ReadAllText(@"C:\Users\Jered\OneDrive\Desktop\Programacion\C# .NET\CursoC#\texto2.txt");
                Console.WriteLine(content2);
            }
            catch (FileNotFoundException ex)
            {
                Console.WriteLine("El archivo no existe");
            }

            Console.WriteLine("Programa finalizado");
        }
    }
}
