import { Component, Output, OnInit,EventEmitter  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from '../service/model/Agenda';
import { Router } from '@angular/router';
import { Sexo } from '../service/model/Sexo';
@Component({
  selector: 'app-crea-agenda',
  templateUrl: './crea-agenda.component.html',
  styleUrls: ['./crea-agenda.component.css']
})
export class CreaAgendaComponent implements OnInit {
  obligatorio: boolean = false
  datos!: string
  agenda = new Agenda
  secId: number = 0
  public ltsAgenda: Array<Agenda> = []
  public ltsSexo : Array<Sexo> = []

  constructor(private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.ltsSexo = [
      { id: 1, nombre: "Masculino" , prefijo: "MA"},
      { id: 2, nombre: "Femenino" ,  prefijo: "FE"},
      { id: 3,  nombre: "Otro" ,  prefijo: "OT"}
    ] 
  }

  guardarAgenda(){
   console.log("datos ..",this.agenda)
   this.obligatorio = this.validacionCampos()
   if(!this.obligatorio){
      this.datos = localStorage.getItem("ltsAgendas")||""
      if(this.datos !== ''){
      this.ltsAgenda = JSON.parse(this.datos)
      this.secId = this.ltsAgenda.length
      } 
      this.agenda.id = this.secId  + 1
      this.ltsAgenda.push(this.agenda)
      localStorage.setItem('ltsAgendas', JSON.stringify(this.ltsAgenda));
      this.activeModal.close();
      window.location.reload();
    }

  }

  validacionCampos():boolean{
    console.log("this.agenda.nombres ", this.agenda.nombres)
    if(this.agenda.nombres === undefined || this.agenda.nombres === ''){
      return true
    }else if(this.agenda.apellidos === undefined  || this.agenda.apellidos === ''){
      return true
    }else if(this.agenda.cedula === undefined || this.agenda.cedula === ''){
      return true
    }else if(this.agenda.edad === undefined || this.agenda.edad === ''){
      return true
    }else if(this.agenda.sexo === undefined || this.agenda.sexo.nombre === ''){
      return true
    }
     return false
  }

}
