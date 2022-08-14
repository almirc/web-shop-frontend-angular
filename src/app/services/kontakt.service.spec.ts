import { TestBed } from '@angular/core/testing';

import { KontaktService } from './kontakt.service';

describe('KontaktService', () => {
  let service: KontaktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontaktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
