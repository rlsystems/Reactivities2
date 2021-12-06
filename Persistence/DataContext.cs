using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
//using Microsoft.AspNetCore.Identity.EntityFramework;


namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        //here we are using the base (DbContext) constructor 
        public DataContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Activity> Activities {get; set; }
    }
}