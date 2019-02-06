import { TestBed } from '@angular/core/testing';

import { ServicetasksService } from './servicetasks.service';

describe('ServicetasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicetasksService = TestBed.get(ServicetasksService);
    expect(service).toBeTruthy();
  });
});
