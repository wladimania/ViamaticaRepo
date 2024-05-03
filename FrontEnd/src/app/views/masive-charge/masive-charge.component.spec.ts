import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasiveChargeComponent } from './masive-charge.component';

describe('MasiveChargeComponent', () => {
  let component: MasiveChargeComponent;
  let fixture: ComponentFixture<MasiveChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasiveChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasiveChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
