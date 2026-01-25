using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _00_ConexionBD
{
    public class BeerDB : DB
    {
        public BeerDB(string serverIP, string dbName) : base(serverIP, dbName)
        {

        }

        // Metodo que regresa una lista de cervezas = Select * from Beer
        public List<Beer> GetAll()
        {
            Connect();

            List<Beer> beers = new List<Beer>();
            string selectQuery = "select ID, Name, BrandID from dbo.Beer;";
            SqlCommand command = new SqlCommand(selectQuery, _connection);
            SqlDataReader reader = command.ExecuteReader();

            while (reader.Read()) // Se ejecuta mientras haya registros en la tabla
            {
                int id = reader.GetInt32(0);
                string name = reader.GetString(1);
                int brandId = reader.GetInt32(2);
                beers.Add(new Beer(id, name, brandId));
            }

            Disconnect();

            return beers;
        }
    }
}
