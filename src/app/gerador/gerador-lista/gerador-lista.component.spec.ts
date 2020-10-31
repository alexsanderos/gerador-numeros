import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorListaComponent } from './gerador-lista.component';

describe('GeradorListaComponent', () => {
  let component: GeradorListaComponent;
  let fixture: ComponentFixture<GeradorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
