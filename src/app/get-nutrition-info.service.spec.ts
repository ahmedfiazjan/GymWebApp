import { TestBed } from '@angular/core/testing';

import { GetNutritionInfoService } from './get-nutrition-info.service';

describe('GetNutritionInfoService', () => {
  let service: GetNutritionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNutritionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
