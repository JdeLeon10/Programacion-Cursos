namespace _00_ClasesYObjetos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Paradigma: Estilo de como programar y hacer las cosas en un lenguaje de programacion

            // Objetos: Entidad que tiene un estado y un comportamiento o funcionalidad
            // Clase: Es la plantilla o molde para crear objetos

            // Sintaxis: TipoDato nombreObjeto/variable = new TipoDato();
            Sale sale = new Sale(100, DateTime.Now);
            sale.Show();
            Console.WriteLine(sale.GetInfo()); 
        }
    }

    class Sale
    {
        // Atributos o propiedades
        int total; 
        DateTime date;

        // Constructor debe llamarse igual a la clase
        public Sale(int total, DateTime date)
        {
            this.total = total;
            this.date = date;
        }

        // Metodo que retorna un string
        public string GetInfo()
        {
            return $"Total: {total}, Date: {date.ToLongDateString()}";
        }

        // Void = no retorna ningún valor
        public void Show()
        {
            Console.WriteLine("Hola soy una venta");
        }
    }
}
