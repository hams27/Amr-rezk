import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAdessComponent } from './shipping-adess.component';

describe('ShippingAdessComponent', () => {
  let component: ShippingAdessComponent;
  let fixture: ComponentFixture<ShippingAdessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingAdessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingAdessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
