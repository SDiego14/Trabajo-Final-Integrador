import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriasService } from '../categorias.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { ICategoria } from '../categoria.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent implements OnInit {
  categorias?: Array<ICategoria>;
  isAdmin = false;
  private subscription?: Subscription;

  constructor(
    private categoriaService: CategoriasService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.subscription = this.categoriaService.listar().subscribe({
      next: (data: Array<ICategoria>) => {
        this.categorias = data;
      },
      error: (err) => {
        console.error('Error al cargar las categorias:', err);
      },
    });
    }
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }
  }

