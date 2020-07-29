import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoturnosPasadosComponent } from './listadoturnos-pasados.component';

describe('ListadoturnosPasadosComponent', () => {
  let component: ListadoturnosPasadosComponent;
  let fixture: ComponentFixture<ListadoturnosPasadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoturnosPasadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoturnosPasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
