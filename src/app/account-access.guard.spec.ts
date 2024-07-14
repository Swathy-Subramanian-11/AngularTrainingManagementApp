import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountAccessGuard } from './account-access.guard';

describe('accountAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
