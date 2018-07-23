import { TestBed, inject } from '@angular/core/testing';

import { ProgramcreatorService } from './programcreator.service';


describe('ProgramcreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramcreatorService]
    });
  });

  it('should be created', inject([ProgramcreatorService], (service: ProgramcreatorService) => {
    expect(service).toBeTruthy();
  }));
});
