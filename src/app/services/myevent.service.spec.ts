import { TestBed } from '@angular/core/testing';

import { MyeventService } from './myevent.service';

describe('MyeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyeventService = TestBed.get(MyeventService);
    expect(service).toBeTruthy();
  });
});
