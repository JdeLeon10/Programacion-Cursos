namespace LINQ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // LINQ permite consultar colecciones de datos de una manera sencilla y legible

            // Origen de datos
            var lista1 = new List<string>()
            {
                "Manzana",
                "Banana",
                "Cereza",
                "Dátil",
                "Elderberry",
                "Higo",
                "Uva",
                "Kiwi"
            };

            // Instrucción de consulta
            var infoOrdenada = from fruta in lista1
                               orderby fruta
                               select fruta;

            // Ejecucion de consultas
            foreach (var fruta in infoOrdenada)
            {
                Console.WriteLine(fruta);
            }
        }
    }
}
