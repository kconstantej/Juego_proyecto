import { TestBed } from '@angular/core/testing';

import { CardsDBService } from './cards-db.service';

describe('CardsDBService', () => {
  let service: CardsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
