namespace _02_Herencia
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Doctor doctor1 = new Doctor("Alice", 35, "Cardiology");
            Console.WriteLine(doctor1.GetInfo());
            Console.WriteLine(doctor1.GetData());

            Programador programador1 = new Programador("Bob", 28, "C#");
            Console.WriteLine(programador1.GetInfo());
            Console.WriteLine(programador1.GetData());
        }

        class People
        {
            private string _name;
            private int _age;

            // Constructor
            public People(string name, int age)
            {
                this._name = name;
                this._age = age;
            }

            public string GetInfo()
            {
                return $"Name: {_name}, Age: {_age}";
            }
        }

        class Doctor : People
        {
            private string _specialty;

            // Constructor, debemos pasar los parametros originales : base (a donde iran)
            public Doctor(string name, int age, string specialty) : base(name, age)
            {
                this._specialty = specialty;
            }
            public string GetData()
            {
                return $"{GetInfo()}, Specialty: {_specialty}";
            }
        }

        class Programador : People
        {
            private string _programmingLanguage;
            // Constructor
            public Programador(string name, int age, string programmingLanguage) : base(name, age)
            {
                this._programmingLanguage = programmingLanguage;
            }
            public string GetData()
            {
                return $"{GetInfo()}, Programming Language: {_programmingLanguage}";
            }
        }
    }
}
