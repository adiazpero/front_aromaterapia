import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallebienestarComponent } from './detallebienestar.component';

describe('DetallebienestarComponent', () => {
  let component: DetallebienestarComponent;
  let fixture: ComponentFixture<DetallebienestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallebienestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallebienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
