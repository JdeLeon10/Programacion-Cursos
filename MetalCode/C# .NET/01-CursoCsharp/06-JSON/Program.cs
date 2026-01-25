namespace _06_JSON
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Beer myBeer = new Beer
            {
                Name = "Pikantus",
                Brand = "Erdinger"
            };

            string json = "{\"Name\": \"Pikantus\", \"Brand\": \"Erdinger\"}";

            // json de array
            Beer[] beers = new Beer[]
            {
                new Beer { Name = "Pikantus", Brand = "Erdinger" },
                new Beer { Name = "Weissbier", Brand = "Paulaner" },
                new Beer { Name = "Lager", Brand = "Heineken" }
            };

            string jason2 = "[{\"Name\": \"Pikantus\", \"Brand\": \"Erdinger\"}, {\"Name\": \"Weissbier\", \"Brand\": \"Paulaner\"}, {\"Name\": \"Lager\", \"Brand\": \"Heineken\"}]";
        }

        public class Beer
        {
            public string Name { get; set; }
            public string Brand { get; set; }
        }
    }
}
