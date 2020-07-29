import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarturnoComponent } from './sacarturno.component';

describe('SacarturnoComponent', () => {
  let component: SacarturnoComponent;
  let fixture: ComponentFixture<SacarturnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacarturnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
