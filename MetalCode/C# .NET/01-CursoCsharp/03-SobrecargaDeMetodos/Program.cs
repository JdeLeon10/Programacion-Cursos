namespace _03_SobrecargaDeMetodos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Capacidad de llamar al mismo metodo con diferentes parametros en diferentes clases
            // Debe ser el mismo tipo de retorno, int o string
            Math math = new Math();
            Console.WriteLine(math.Sum(1,2));
            Console.WriteLine(math.Sum("1", "2"));

            int[] numbers = new int[] { 1, 2, 5 };
            Console.WriteLine(math.Sum(numbers));
        }
    }

    public class Math
    {
        public int Sum(int a, int b)
        {
            return a + b;
        }

        public int Sum(string a, string b)
        {
            return int.Parse(a) + int.Parse(b);
        }

        public int Sum(int[] numbers)
        {
            int result = 0;
            int i = 0;

            while (i < numbers.Length)
            {
                result += numbers[i];
                i++;
            }

            return result;
        }
    }
}
