import { TestBed } from '@angular/core/testing';

import { SmaxAssignmentComponentService } from './smax-assignment-component.service';

describe('SmaxAssignmentComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmaxAssignmentComponentService = TestBed.get(SmaxAssignmentComponentService);
    expect(service).toBeTruthy();
  });
});
