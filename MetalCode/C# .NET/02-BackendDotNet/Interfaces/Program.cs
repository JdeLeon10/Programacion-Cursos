namespace Interfaces
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
                Una interfaz es un contrato que define un conjunto de métodos y propiedades que una clase debe implementar.
                Las interfaces pueden ser utiles para la escalabilidad de codigo, 
                ya que permiten definir comportamientos comunes entre diferentes clases 
                sin forzarlas a heredar de una clase base comun.
             */

            Carro carro = new Carro();
            carro.Manejar();
            carro.Detener();
            carro.Reparar();
        }
    }

    public interface IManejar
    {
        void Manejar();
    }

    public interface IReparar
    {
        void Reparar();
    }

    public interface IDetener 
    {
        void Detener();
    }

    public class Carro : IManejar, IReparar, IDetener
    {
        public void Detener()
        {
            Console.WriteLine("Deteniendo el carro");
        }

        public void Reparar()
        {
            Console.WriteLine("Reparando el carro");
        }

        public void Manejar()
        {
            Console.WriteLine("Manejando el carro");
        }
    }
}
