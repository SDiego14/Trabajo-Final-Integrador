import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ICarritoItem } from './carrito-item.model';
import { CarritoService } from './carrito.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProducto } from '../productos/producto.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  faCreditCard = faCreditCard;

  items: ICarritoItem[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      this.items = items;
    });
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }

  incrementarCantidad(item: ICarritoItem) {
    this.carritoService.agregarProducto(item.producto, 1);
  }

  disminuirCantidad(item: ICarritoItem) {
    if (item.cantidad > 1) {
      this.carritoService.agregarProducto(item.producto, -1);
    } else {
      const confirmacion = confirm(
        '¿Deseas eliminar este producto del carrito?'
      );
      if (confirmacion) {
        this.eliminarProducto(item.producto);
      }
    }
  }

  eliminarProducto(producto: IProducto){
    this.carritoService.eliminarProducto(producto);
  }

}
