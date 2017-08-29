import { TestBed, async, inject } from '@angular/core/testing';

import { LeavecheckGuard } from './leavecheck.guard';

describe('LeavecheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavecheckGuard]
    });
  });

  it('should ...', inject([LeavecheckGuard], (guard: LeavecheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
