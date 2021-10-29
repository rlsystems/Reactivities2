using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        //commands do not return data
        public class Command : IRequest
        {

            public Activity Activity { get; set; } //this is what we want to receive from the request

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity); //only being added to memory at this point so doesnt need to be async

                await _context.SaveChangesAsync();

                return Unit.Value; //this lets our API unit know we have finished
            }
        }
    }
}