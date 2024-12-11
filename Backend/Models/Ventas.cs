using System;
using Microsoft.AspNetCore.Mvc;
using ProductCategoryCrud.Models;
using ProductCategoryCrud.Data;

namespace ProductCategoryCrud.Models
{
    
    public class Venta {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string Comprador { get; set; }
        public decimal Total { get; set; }
        public List<DetalleVenta> Detalles { get; set;}
    }

    public class DetalleVenta {
        public int Id { get; set;}
        public int VentaId { get; set;}
        public int ProductoId { get; set;}
        public int Cantidad { get; set;}
        public decimal PrecioUnitario { get; set;}
        public decimal Subtotal { get; set;}
    }
}