import { Component, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../carrito.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-carrito-icon',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './carrito-icon.component.html',
  styleUrl: './carrito-icon.component.css',
})
export class CarritoIconComponent {
  faCartShopping = faCartShopping;
  cantidad$: Observable<number>;

  constructor(private carritoService: CarritoService,
              private authService: AuthService,
              private router: Router
  ) {
    this.cantidad$ = this.carritoService.items$.pipe(
      map((items) => (items ? items.length: 0))
    );
  }

  irAlCarrito(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/carrito']);
    }
  }

}
