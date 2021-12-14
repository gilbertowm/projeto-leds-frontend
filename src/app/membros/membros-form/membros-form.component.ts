import { Component, OnInit } from '@angular/core';
import { Membro } from '../membro';
import { MembrosService } from 'src/app/membros.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-membros-form',
  templateUrl: './membros-form.component.html',
  styleUrls: ['./membros-form.component.css']
})
export class MembrosFormComponent implements OnInit {

  membro: Membro;
  success: boolean=false;
  errors: String[];
  id: number;

  constructor( private service : MembrosService,private router:Router, 
    private activatedRoute : ActivatedRoute) { 
    this.membro = new Membro();
    
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id){
        this.service.getMembroById(this.id)
        .subscribe(response => this.membro = response,
        errorResponse => this.membro = new Membro()
        )
      }      
    })
  }

  onSubmit(){
    if (this.id){
        this.service
        .atualizar(this.membro)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o membro'];
        })
    }else{
      this.service.salvar(this.membro).subscribe(response=>{
        this.success = true;
        this.errors = null;
        this.membro= response;
      },errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      } );
    }
  }

  voltarParaListagem(){
    this.router.navigate(['/membros-lista']);
  }

}
