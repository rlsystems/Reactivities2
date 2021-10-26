using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        //here we are using the base (DbContext) constructor 
        public DataContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Activity> Activities {get; set; }
    }
}