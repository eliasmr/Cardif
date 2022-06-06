import { TestBed } from '@angular/core/testing';

import { InformacionAgendaService } from './informacion-agenda.service';

describe('InformacionAgendaService', () => {
  let service: InformacionAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
