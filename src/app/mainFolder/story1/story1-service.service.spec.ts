import { TestBed, async } from '@angular/core/testing';

import { Story1ServiceService } from './story1-service.service';
import { HttpClientModule } from '@angular/common/http';


<<<<<<< HEAD
=======
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
>>>>>>> 196c7c2f57d3884e8cf23677ac27da8154800726
