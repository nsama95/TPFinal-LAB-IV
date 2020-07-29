import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoturnosEspComponent } from './listadoturnos-esp.component';

describe('ListadoturnosEspComponent', () => {
  let component: ListadoturnosEspComponent;
  let fixture: ComponentFixture<ListadoturnosEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoturnosEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoturnosEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
