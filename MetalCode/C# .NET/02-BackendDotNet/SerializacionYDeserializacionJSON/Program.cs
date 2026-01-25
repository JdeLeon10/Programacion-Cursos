using System.Text.Json;

namespace SerializacionYDeserializacionJSON
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
            Console.WriteLine(json);

            // Deserializacion
            Beer beer = JsonSerializer.Deserialize<Beer>(json);
            Console.WriteLine(beer.Name);
            Console.WriteLine(beer.Brand);

            Console.WriteLine("");

            // json de array
            Beer[] beers = new Beer[]
            {
                new Beer { Name = "Pikantus", Brand = "Erdinger" },
                new Beer { Name = "Weissbier", Brand = "Paulaner" },
                new Beer { Name = "Lager", Brand = "Heineken" }
            };

            // string jason2 = "[{\"Name\": \"Pikantus\", \"Brand\": \"Erdinger\"}, {\"Name\": \"Weissbier\", \"Brand\": \"Paulaner\"}, {\"Name\": \"Lager\", \"Brand\": \"Heineken\"}]";
            string json2 = JsonSerializer.Serialize(beers);
            Console.WriteLine(json2);
            Beer[] beers2 = JsonSerializer.Deserialize<Beer[]>(json2);
            Console.WriteLine(beers2[0].Name);
            Console.WriteLine(beers2[0].Brand);

            Console.WriteLine("");
        }

        public class Beer
        {
            public string Name { get; set; }
            public string Brand { get; set; }
        }
    }
}
