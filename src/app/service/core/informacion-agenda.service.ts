import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionAgendaService {

  constructor() { }

  public set guardaAgenda(agenda: any){
    console.log('agenda ',agenda)
   localStorage.setItem('ltsAgendas', agenda);
  }
}
