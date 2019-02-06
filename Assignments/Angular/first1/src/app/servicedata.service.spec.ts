import { TestBed } from '@angular/core/testing';

import { ServicedataService } from './servicedata.service';

describe('ServicedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicedataService = TestBed.get(ServicedataService);
    expect(service).toBeTruthy();
  });
});
