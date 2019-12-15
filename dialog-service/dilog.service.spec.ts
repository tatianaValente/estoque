import { TestBed } from '@angular/core/testing';

import { DilogService } from './dilog.service';

describe('DilogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DilogService = TestBed.get(DilogService);
    expect(service).toBeTruthy();
  });
});
