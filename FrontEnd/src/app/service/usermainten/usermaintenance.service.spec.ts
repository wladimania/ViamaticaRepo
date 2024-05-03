import { TestBed } from '@angular/core/testing';

import { UsermaintenanceService } from './usermaintenance.service';

describe('UsermaintenanceService', () => {
  let service: UsermaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
