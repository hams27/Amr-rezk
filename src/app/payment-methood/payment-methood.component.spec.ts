import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethoodComponent } from './payment-methood.component';

describe('PaymentMethoodComponent', () => {
  let component: PaymentMethoodComponent;
  let fixture: ComponentFixture<PaymentMethoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
