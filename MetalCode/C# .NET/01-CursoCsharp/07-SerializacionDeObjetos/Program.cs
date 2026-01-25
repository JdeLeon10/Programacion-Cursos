using System.Text.Json;

namespace _07_SerializacionDeObjetos
{
    // La serializacion es el proceso de convertir un objeto en una secuencia de bytes para almacenarlo o transmitirlo
    // La deserializacion es el proceso inverso, convertir una secuencia de bytes en un objeto
    internal class Program
    {
        static void Main(string[] args)
        {
            Beer myBeer = new Beer
            {
                Name = "Pikantus",
                Brand = "Erdinger"
            };

            // string json = "{\"Name\": \"Pikantus\", \"Brand\": \"Erdinger\"}";
            string json = JsonSerializer.Serialize(myBeer);

            // Deserializacion
            Beer beer = JsonSerializer.Deserialize<Beer>(json);

            // json de array
            Beer[] beers = new Beer[]
            {
                new Beer { Name = "Pikantus", Brand = "Erdinger" },
                new Beer { Name = "Weissbier", Brand = "Paulaner" },
                new Beer { Name = "Lager", Brand = "Heineken" }
            };

            // string jason2 = "[{\"Name\": \"Pikantus\", \"Brand\": \"Erdinger\"}, {\"Name\": \"Weissbier\", \"Brand\": \"Paulaner\"}, {\"Name\": \"Lager\", \"Brand\": \"Heineken\"}]";
            string jason2 = JsonSerializer.Serialize(beers);
            Beer[] beers2 = JsonSerializer.Deserialize<Beer[]>(jason2);
        }

        public class Beer
        {
            public string Name { get; set; }
            public string Brand { get; set; }
        }
    }
}
