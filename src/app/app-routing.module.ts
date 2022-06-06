import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaAgendaComponent } from './lista-agenda/lista-agenda.component';

const routes: Routes = [
  {path:'',component:AppComponent, children:[

    {path:'', redirectTo:'lista-agenda', pathMatch: 'full'},
    {path:'lista-agenda',component:ListaAgendaComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
