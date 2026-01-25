namespace _10_GestionNotas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Obteniendo las notas y guardandolas en un arreglo
            Console.WriteLine("Cuantas notas deseas ingresar?  ");
            int numberOfNotes = int.Parse(Console.ReadLine());
            int[] notes = new int [numberOfNotes];

            // Recorriendo el arreglo para llenarlo con las notas
            for (int i = 0; i < numberOfNotes; i++)
            {
                Console.WriteLine($"Ingresa la nota {i + 1}: ");
                notes[i] = int.Parse(Console.ReadLine());
            }

            // Calculando el promedio
            int sumNotes = notes.Sum();
            int average = sumNotes / notes.Length;
            Console.WriteLine($"El promedio de notas es: {average}");

            // Calculando la nota más alta y la más baja
            int highest = notes.Max();
            int lowest = notes.Min();

            Console.WriteLine($"La nota mas alta es {highest}");
            Console.WriteLine($"La nota mas baja es {lowest}");
        }
    }
}
