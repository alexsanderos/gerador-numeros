import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorPaginaComponent } from './gerador-pagina.component';

describe('GeradorPaginaComponent', () => {
  let component: GeradorPaginaComponent;
  let fixture: ComponentFixture<GeradorPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
