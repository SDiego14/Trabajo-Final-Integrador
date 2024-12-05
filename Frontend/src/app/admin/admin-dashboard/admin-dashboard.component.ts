import { Component } from '@angular/core';
import { ProductoListComponent } from '../../productos/producto-list/producto-list.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ProductoListComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
