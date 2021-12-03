using Application.Core;
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

        protected ActionResult HandleResult<T>(Result<T> result)
        {
            if(result == null) return NotFound();
            if (result.IsSuccess && result.Value != null)
            {
                return Ok(result.Value);
            }
            if (result.IsSuccess && result.Value == null)
            {
                return NotFound();
            }

            return BadRequest(result.Error);
        }

    }
}