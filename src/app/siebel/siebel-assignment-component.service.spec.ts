import { TestBed } from '@angular/core/testing';

import { SiebelAssignmentComponentService } from './siebel-assignment-component.service';

describe('SiebelAssignmentComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiebelAssignmentComponentService = TestBed.get(SiebelAssignmentComponentService);
    expect(service).toBeTruthy();
  });
});
