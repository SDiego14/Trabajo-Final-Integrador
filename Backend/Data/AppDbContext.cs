using Microsoft.EntityFrameworkCore;
using ProductCategoryCrud.Models;
using Microsoft.AspNetCore.Mvc;
using ProductCategoryCrud.Data;

namespace ProductCategoryCrud.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Venta> Ventas { get; set;}
        public DbSet<DetalleVenta> DetallesVentas { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
         
            modelBuilder.Entity<DetalleVenta>()
                .HasOne<Venta>()
                .WithMany(v => v.Detalles)
                .HasForeignKey(d => d.VentaId);
         
            // Seed roles
            modelBuilder.Entity<Role>().HasData(
                new Role { Id = 1, Name = "Admin" },
                new Role { Id = 2, Name = "User" }
            );

            base.OnModelCreating(modelBuilder);
        }        
    }
}


