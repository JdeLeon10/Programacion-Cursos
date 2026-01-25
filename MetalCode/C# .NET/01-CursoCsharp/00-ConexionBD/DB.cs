using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Conexion a base de datos
namespace _00_ConexionBD
{
    public abstract class DB
    {
        private string _connectionString;
        protected SqlConnection _connection;

        // Constructor
        public DB(string serverIP, string dbName)
        {
            _connectionString = $"Data Source={serverIP};Initial Catalog={dbName};Integrated Security=True;TrustServerCertificate=True;";
        }

        // Metodo que hace la conexion
        public void Connect()
        {
            _connection = new SqlConnection(_connectionString);
            _connection.Open();
        }

        // Metodo que cierra la conexion
        public void Disconnect()
        {
            if (_connection != null && _connection.State == System.Data.ConnectionState.Open)
            {
                _connection.Close();
            }
        }
    }
}
