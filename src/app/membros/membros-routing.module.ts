import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembrosFormComponent } from './membros-form/membros-form.component';
import { MembrosListaComponent } from './membros-lista/membros-lista.component';

const routes: Routes = [
  {path: 'membros-form', component: MembrosFormComponent},
  {path: 'membros-form/:id', component: MembrosFormComponent},
  {path: 'membros-lista', component: MembrosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembrosRoutingModule { }
