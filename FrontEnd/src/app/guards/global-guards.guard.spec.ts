import { TestBed } from '@angular/core/testing';

import { GlobalGuardsGuard } from './global-guards.guard';

describe('GlobalGuardsGuard', () => {
  let guard: GlobalGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GlobalGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
