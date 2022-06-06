import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAgendaComponent } from './crea-agenda.component';

describe('CreaAgendaComponent', () => {
  let component: CreaAgendaComponent;
  let fixture: ComponentFixture<CreaAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
