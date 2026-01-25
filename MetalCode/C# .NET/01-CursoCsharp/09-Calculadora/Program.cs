using System.Linq.Expressions;

namespace _09_Calculadora
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {

                try
                {
                    Console.WriteLine("Ingrese la operación a realizar: ");
                    Separacion();
                    Console.WriteLine("1. Suma ");
                    Console.WriteLine("2. Resta ");
                    Console.WriteLine("3. Multiplicacion ");
                    Console.WriteLine("4. Division ");
                    Console.WriteLine("5. Salir de la aplicación");
                    int choice = int.Parse(Console.ReadLine()); // Console.ReadLine() siempre devuelve un string
                    Separacion();

                    if (choice == 5)
                    {
                        Console.WriteLine("Saliendo de la aplicación...");
                        break;
                    }

                    if (choice < 1 || choice > 5)
                    {
                        Console.WriteLine("Opción no válida, por favor intente de nuevo.");
                        Separacion();
                        continue;
                    }

                    Console.WriteLine("Ingrese el primer digito: ");
                    int num1 = int.Parse(Console.ReadLine());

                    Console.WriteLine("Ingrese el segundo digito: ");
                    int num2 = int.Parse(Console.ReadLine());
                    Separacion();

                    switch (choice)
                    {
                        case 1:
                            Console.WriteLine($"El resultado de la suma es: {num1 + num2}");
                            Separacion();
                            break;

                        case 2:
                            Console.WriteLine($"El resultado de la resta es: {num1 - num2}");
                            Separacion();
                            break;

                        case 3:
                            Console.WriteLine($"El resultado de la multiplicacion es: {num1 * num2}");
                            Separacion();
                            break;

                        case 4:
                            //if (num2 == 0) { Console.WriteLine("No puede dividir entre cero"); }
                            //else { Console.WriteLine($"El resultado de la division es: {num1 / num2}"); }
                            //break;

                            // Caso con manejo de errores
                            try
                            {
                                Console.WriteLine($"El resultado de la division es: {num1 / num2}");
                                Separacion();
                            }
                            catch (DivideByZeroException)
                            {
                                Console.WriteLine("No puede dividir entre cero");
                                Separacion();
                            }
                            break;

                        default:
                            Separacion();
                            break;
                    }

                    Console.WriteLine("Desea realizar una nueva operacion? Y / N");
                    string continueChoice = Console.ReadLine().ToUpper();

                    if (continueChoice != "Y")
                    {
                        Console.WriteLine("Saliendo de la aplicación...");
                        Separacion();
                        break;
                    }
                }

                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    Separacion();
                }
            }
        }

        public static void Separacion()
        {
            Console.WriteLine("---------------");
        }
    }
}
