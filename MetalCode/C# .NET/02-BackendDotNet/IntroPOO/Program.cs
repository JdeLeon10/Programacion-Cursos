namespace IntroPOO
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creacion de objeto tipo Sale tomando en cuenta su constructor (debe tener un valor inicial y válido)
            Sale sale = new Sale(15);
            Console.WriteLine(sale.Total);
            sale.PrintTotal(); // Metodo que imprime el total
            Console.WriteLine(sale.GetTotal(3)); // Total + tax

            // Creacion de objeto tipo persona sin constructor (se le dan valores)
            Person person = new Person();
            person.FirstName = "Jeremy";
            person.LastName = "de Leon";
            person.PrintInfo();

            // Creacion de objeto tipo persona usando inicializador de objetos
            Person person2 = new Person() { FirstName = "Andrea", LastName = "Barrios" };
            person2.PrintInfo();

            // Creacion de objeto tipo profesion (hereda de persona)
            Profession profession = new Profession()
            {
                FirstName = "Alejandro",
                LastName = "Roa",
                Job = "Developer"
            };
            profession.PrintInfo();
        }
    }

    // Creacion de clase sale
    public class Sale
    {
        // Creacion de propiedad Total
        public decimal Total { get; set; }

        // Constructor
        public Sale(decimal total)
        {
            this.Total = total;
        }

        public void PrintTotal()
        {
            Console.WriteLine(this.Total);
        }

        public decimal GetTotal(decimal tax)
        {
            return this.Total + tax;
        }
    }

    // Creacion de clase persona
    public class Person
    {
        // Creacion de propiedades
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // Sobrescritura de metodo
        public virtual void PrintInfo()
        {
            Console.WriteLine($"{FirstName} , {LastName} - Como metodo original");
        }
    }

    // Creacion de clase profesion que hereda de persona
    public class Profession : Person
    {
        public string Job { get; set; }

        // Sobrescritura de metodo
        public override void PrintInfo()
        {
            Console.WriteLine($"{FirstName} , {LastName} , {Job} - Con sobrescritura de metodo");
        }
    }
}
