import { Component, OnInit } from '@angular/core';
import { MembrosService } from 'src/app/membros.service';
import { Membro } from '../membro';

import { Router} from '@angular/router';
import { MembrosModule } from '../membros.module';

@Component({
  selector: 'app-membros-lista',
  templateUrl: './membros-lista.component.html',
  styleUrls: ['./membros-lista.component.css']
})
export class MembrosListaComponent implements OnInit {

  membros : Membro[] = [];
  membroSelecionado : Membro;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service:MembrosService, private router: Router) {   }

  ngOnInit(): void {
    this.service
    .getMembros()
    .subscribe(resposta=>this.membros=resposta);
  }

  novoCadastro(){
    this.router.navigate(['/membros-form']);
  }

  preparaDelecao(membro : Membro){
    this.membroSelecionado = membro;
  }

  deletarMembro(){
    this.service.deletar(this.membroSelecionado)
    .subscribe(
      response => {
        this.mensagemSucesso = 'Membro deletado com sucesso!',
        this.ngOnInit();
      },
      erro => this.mensagemErro = 'Erro ao deletar membro.'
    )
  }

}
