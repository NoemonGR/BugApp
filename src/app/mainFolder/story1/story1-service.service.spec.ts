import { TestBed } from '@angular/core/testing';

import { Story1ServiceService } from './story1-service.service';

describe('Story1ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Story1ServiceService = TestBed.get(Story1ServiceService);
    expect(service).toBeTruthy();
  });
});
