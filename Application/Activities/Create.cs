using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        //commands do not return data
        //Unit is Mediator's return nothing 
        public class Command : IRequest<Result<Unit>>
        {

            public Activity Activity { get; set; } //this is what we want to receive from the request

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity); //only being added to memory at this point so doesnt need to be async

                var result = await _context.SaveChangesAsync() > 0; //will be true or false depending on how many records affected

                if(!result)
                return Result<Unit>.Failure("Failed to create activity");

                return Result<Unit>.Success(Unit.Value);

                //return Unit.Value; //this lets our API unit know we have finished
            }
        }
    }
}