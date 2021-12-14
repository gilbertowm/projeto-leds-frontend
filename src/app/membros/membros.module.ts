import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MembrosRoutingModule } from './membros-routing.module';
import { MembrosFormComponent } from './membros-form/membros-form.component';
import { MembrosListaComponent } from './membros-lista/membros-lista.component';


@NgModule({
  declarations: [MembrosFormComponent, MembrosListaComponent],
  imports: [
    CommonModule,
    MembrosRoutingModule,
    FormsModule
  ],exports:[
    MembrosFormComponent,
    MembrosListaComponent
  ]
})
export class MembrosModule { }
