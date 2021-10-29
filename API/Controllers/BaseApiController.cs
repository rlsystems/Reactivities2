using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")] //this creates a route with a name that gets replaced by whatever the contoller name is
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>(); //protected makes this available to the base and any derived classes only
    
    }
}