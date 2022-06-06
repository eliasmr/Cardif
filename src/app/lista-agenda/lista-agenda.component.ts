import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { CreaAgendaComponent } from '../crea-agenda/crea-agenda.component';
import { Agenda } from '../service/model/Agenda';

@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.component.html',
  styleUrls: ['./lista-agenda.component.css']
})
export class ListaAgendaComponent implements OnInit {

  public ltsAgenda: Array<Agenda> = []
  agenda = new Agenda
  datos!: string
 

  constructor(private modalService: NgbModal ) { }

  btnGuardaAgenda(){
    this.modalService.open(CreaAgendaComponent);
  }
  ngOnInit(): void {
    this.datos = localStorage.getItem("ltsAgendas")||""
    if(this.datos !== ''){
      this.ltsAgenda = JSON.parse(this.datos)
    }
   
   console.log("ltsAgenda ",this.ltsAgenda);

   
  }

}
