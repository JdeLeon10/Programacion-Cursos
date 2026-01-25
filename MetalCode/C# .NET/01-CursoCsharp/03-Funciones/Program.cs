namespace _03_Funciones
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int x = 2;
            int y = 3;

            Show();
            Sum(5, 10);
            Sum(x, y);
            int resultado = Mul(7, 8);
            Console.WriteLine(resultado);
        }

        // Void = no retorna ningún valor
        static void Show()
        {
            Console.WriteLine("Hola desde una función void");
        }

        // Funcion que recibe parametros
        static void Sum(int num1, int num2)
        {
            int num3 = num1 + num2;
            Console.WriteLine(num3);
        }

        // Funcion que recibe parametros y retorna un valor, debemos indicar el tipo de dato que regresara
        static int Mul(int num1, int num2)
        {
            return num1 * num2;
        }
    }
}
