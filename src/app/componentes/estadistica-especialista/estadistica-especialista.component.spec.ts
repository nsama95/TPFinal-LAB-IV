import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaEspecialistaComponent } from './estadistica-especialista.component';

describe('EstadisticaEspecialistaComponent', () => {
  let component: EstadisticaEspecialistaComponent;
  let fixture: ComponentFixture<EstadisticaEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
