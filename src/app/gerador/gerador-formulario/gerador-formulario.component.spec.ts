import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorFormularioComponent } from './gerador-formulario.component';

describe('GeradorFormularioComponent', () => {
  let component: GeradorFormularioComponent;
  let fixture: ComponentFixture<GeradorFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
