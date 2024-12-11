using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductCategoryCrud.Data;
using ProductCategoryCrud.Models;
using System.Threading.Tasks;

namespace ProductCategoryCrud.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VentasController : ControllerBase
    {
        private readonly AppDbContext _context;
        public VentasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetVentas()
        {
            var ventas = await _context.Ventas
                .Include(v => v.Detalles)
                .ToListAsync();

                return Ok(ventas);
        }

        [HttpPost]
        public async Task<IActionResult> CrearVenta([FromBody] Venta venta)
        {
            if (venta == null || venta.Detalles == null || venta.Detalles.Count == 0)
            {
                return BadRequest("La venta debe incluir detalles.");
            }

            venta.Total = 0;
            foreach (var detalle in venta.Detalles)
            {
                detalle.Subtotal = detalle.Cantidad * detalle.PrecioUnitario;
                venta.Total += detalle.Subtotal;
            }

            _context.Ventas.Add(venta);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVentaById), new {id = venta.Id}, venta);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVentaById(int id)
        {
            var venta = await _context.Ventas
                .Include(v => v.Detalles)
                .FirstOrDefaultAsync(v => v.Id == id);

                if (venta == null)
                {
                    return NotFound();
                }

                return Ok(venta);
        }
    }
}