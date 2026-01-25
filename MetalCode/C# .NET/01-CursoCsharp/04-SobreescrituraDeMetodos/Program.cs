namespace _04_SobreescrituraDeMetodos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            B b = new B();
            // Si no tuviese sobreescritura, podria usar el metodo de la clase A, pero imprimiria "Hola desde la clase A"
            Console.WriteLine(b.Saludo());

            // Sobreescritura y ampliacion
            C c = new C();
            Console.WriteLine(c.Saludo());
        }
    }

    public class  A
    {
        public virtual string Saludo()
        {
            return "Hola desde la clase A";
        }
    }

    public class B : A
    {
        public override string Saludo()
        {
            return "Hola desde la clase B";
        }
    }

    public class C : A
    {
        // Llamada al metodo de la clase base (A)
        public override string Saludo()
        {
            //return base.Saludo() + " y Hola desde la clase C";
            // base hace referencia al padre (A)
            string saludoBase = base.Saludo();
            return saludoBase + " y Hola desde la clase C";
        }
    }
}
