import { Component } from '@angular/core';
import { ProductoListComponent } from '../../productos/producto-list/producto-list.component';
import { RouterModule } from '@angular/router';
import { CategoriasListComponent } from '../../categorias/categorias-list/categorias-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ProductoListComponent, RouterModule, CategoriasListComponent, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  componenteActual: string = '';

  cargarComponente(nombre: string): void {
    this.componenteActual = nombre;
  }
}
