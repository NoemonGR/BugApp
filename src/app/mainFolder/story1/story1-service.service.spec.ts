import { TestBed, async } from '@angular/core/testing';

import { Story1ServiceService } from './story1-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('Story1ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: Story1ServiceService = TestBed.get(Story1ServiceService);
    expect(service).toBeTruthy();
  });
});
