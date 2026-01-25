namespace _08_SentenciaFor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for(int valor = 0; valor <= 10; valor++)
            {
                Console.WriteLine($"El valor es: {valor}");
            }

            Console.WriteLine("-----");
            Console.WriteLine("Recorriendo un arreglo con for");
            Console.WriteLine();

            // Recorriendo un arreglo con for
            string[] amigos = new string[5] { "Tumax", "Gabriel", "Norma", "Andrea", "Anddre" };

            for (int indice = 0; indice < amigos.Length; indice++)
            {
                Console.WriteLine(amigos[indice]);
            }
        }
    }
}
