import { TestBed } from '@angular/core/testing';

import { AssignmentComponentService } from './assignment-component.service';

describe('AssignmentComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentComponentService = TestBed.get(AssignmentComponentService);
    expect(service).toBeTruthy();
  });
});
