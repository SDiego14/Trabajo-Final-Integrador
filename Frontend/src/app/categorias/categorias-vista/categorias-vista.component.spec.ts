import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasVistaComponent } from './categorias-vista.component';

describe('CategoriasVistaComponent', () => {
  let component: CategoriasVistaComponent;
  let fixture: ComponentFixture<CategoriasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
