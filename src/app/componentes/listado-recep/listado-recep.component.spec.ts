import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecepComponent } from './listado-recep.component';

describe('ListadoRecepComponent', () => {
  let component: ListadoRecepComponent;
  let fixture: ComponentFixture<ListadoRecepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRecepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
