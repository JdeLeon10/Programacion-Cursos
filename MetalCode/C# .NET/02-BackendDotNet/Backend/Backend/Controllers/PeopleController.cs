using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        [HttpGet()]
        public List<People> GetPeople()
        {
            return Repository.people;
        }
    }

    public class Repository
    {
        public static List<People> people = new List<People>()
        {
            new People(){ Id=1, Name="Juan Perez", BirthDate=new DateTime(1990,5,23)},
            new People(){ Id=2, Name="Maria Gomez", BirthDate=new DateTime(1985,10,12)},
            new People(){ Id=3, Name="Carlos Sanchez", BirthDate=new DateTime(2000,3,5)},
        };
    }

    public class People
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
