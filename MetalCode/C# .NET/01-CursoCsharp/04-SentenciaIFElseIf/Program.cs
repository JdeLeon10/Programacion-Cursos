namespace _04_SentenciaIFElseIf
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool areYouHungry = true;
            bool youHaveMoney = false;

            if (areYouHungry && youHaveMoney)
            {
                Console.WriteLine("Puedes comprar y comer algo.");
            }
            else if (areYouHungry && !youHaveMoney)
            {
                Console.WriteLine("Tienes hambre pero no tienes dinero.");
            }
            else
            {
                Console.WriteLine("No tienes hambre y no se si tienes dinero");
            }

            // Operador terciario = Sintaxis = condición ? valorSiVerdadero : valorSiFalso;
            string result = areYouHungry ? "Tienes hambre" : "No tienes hambre";
            Console.WriteLine(result);
        }
    }
}
