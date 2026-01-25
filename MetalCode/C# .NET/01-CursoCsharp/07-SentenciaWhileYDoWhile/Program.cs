namespace _07_SentenciaWhileYDoWhile
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Sentencia while
            int contador = 0;
            while (contador < 5)
            {
                Console.WriteLine($"Contador vale: {contador}");
                contador++;
            }

            Console.WriteLine("-----");

            // Sentencia do while
            int contadorDoWhile = 0;
            do
            {
                Console.WriteLine($"Contador do while vale: {contadorDoWhile}");
                contadorDoWhile++;
            } while (contadorDoWhile < 5);

            Console.WriteLine("-----");
            Console.WriteLine("Recorriendo un arreglo con while");
            Console.WriteLine();

            // Recorriendo un arreglo con while
            string[] amigos = new string[5] { "Tumax", "Gabriel", "Norma", "Andrea", "Anddre" };

            int indice = 0;
            while (indice < amigos.Length)
            {
                Console.WriteLine(amigos[indice]);
                indice++;
            }
        }
    }
}
