namespace _01_Propiedades
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Sale mySale = new Sale(100, DateTime.Now);
            mySale.Total = -500; // Intentamos asignar un valor negativo
            mySale.Total = 1250; // Asignamos un valor positivo
            Console.WriteLine(mySale.Total);
        }
    }

    class Sale
    {
        int total;
        DateTime date;

        // Propiedades en este caso para una proteccion al valor de total
        public int Total
        {
            get { return total; }
            set { if (value < 0) { value = 0; }
                else { total = value; }
            }
        }

        public Sale(int total, DateTime date)
        {
            this.total = total;
            this.date = date;
        }
    }
}
