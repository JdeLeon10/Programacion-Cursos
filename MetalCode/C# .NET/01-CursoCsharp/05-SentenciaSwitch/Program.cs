namespace _05_SentenciaSwitch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese el dia de la semana de 0 a 6");
            string opcion = Console.ReadLine();
            int diaSemana = int.Parse(opcion);

            switch (diaSemana)
            {
                case 0:
                    Console.WriteLine("Domingo");
                    break;
                case 1:
                    Console.WriteLine("Lunes");
                    break;
                case 2:
                    Console.WriteLine("Martes");
                    break;
                case 3:
                    Console.WriteLine("Miércoles");
                    break;
                case 4:
                    Console.WriteLine("Jueves");
                    break;
                case 5:
                    Console.WriteLine("Viernes");
                    break;
                case 6:
                    Console.WriteLine("Sábado");
                    break;
                default:
                    Console.WriteLine("Día no válido");
                    break;
            }   
        }
    }
}
