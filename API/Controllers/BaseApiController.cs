using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")] //this creates a route with a name that gets replaced by whatever the contoller name is
    public class BaseApiController : ControllerBase
    {
        
    }
}