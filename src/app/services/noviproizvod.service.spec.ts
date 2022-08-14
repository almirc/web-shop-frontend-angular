import { TestBed } from '@angular/core/testing';

import { NoviproizvodService } from './noviproizvod.service';

describe('NoviproizvodService', () => {
  let service: NoviproizvodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoviproizvodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
