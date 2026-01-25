namespace _06_Arreglos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creacion de un arreglo con un tamaño fijo
            string[] diasSemana = new string[7];
            diasSemana[0] = "Domingo";
            diasSemana[1] = "Lunes";
            diasSemana[2] = "Martes";
            diasSemana[3] = "Miércoles";
            diasSemana[4] = "Jueves";   
            diasSemana[5] = "Viernes";
            diasSemana[6] = "Sábado";

            // Creacion de un arreglo con varios valores iniciales
            int [] numerosPrimos = new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

            string[] amigos = new string[3] { "Tumax", "Gabriel", null };

            Console.WriteLine(amigos[2]);
        }
    }
}
