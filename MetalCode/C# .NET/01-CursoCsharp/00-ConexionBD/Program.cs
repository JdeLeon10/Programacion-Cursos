using Microsoft.Data.SqlClient;

namespace _00_ConexionBD
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                BeerDB BeerDB = new BeerDB("JEREMY", "CsharpDB");
                List<Beer> beers = BeerDB.GetAll();

                foreach (var beer in beers)
                {
                    Console.WriteLine($"Id: {beer.Id}, Name: {beer.Name}, BrandId: {beer.BrandId}");
                }

            } catch (SqlException ex)
            {
                Console.WriteLine("Conexion invalida");
            }
        }
    }
}
