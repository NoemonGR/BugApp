import { TestBed } from '@angular/core/testing';

import { Story2Service } from './story2.service';

describe('Story2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Story2Service = TestBed.get(Story2Service);
    expect(service).toBeTruthy();
  });
});
