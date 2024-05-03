import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermaintenanceComponent } from './usermaintenance.component';

describe('UsermaintenanceComponent', () => {
  let component: UsermaintenanceComponent;
  let fixture: ComponentFixture<UsermaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
