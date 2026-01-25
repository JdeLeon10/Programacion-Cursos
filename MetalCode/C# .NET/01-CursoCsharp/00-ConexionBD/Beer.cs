using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Clase molde para una fila de la tabla de la bd
namespace _00_ConexionBD
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int BrandId { get; set; }

        public Beer(int id, string name, int brandId)
        {
            Id = id;
            Name = name;
            BrandId = brandId;
        }
    }
}
