import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { InstituicaoService } from "../../services/instituicao-service";


@Component({
  selector: 'page-instituicao-detail',
  templateUrl: 'instituicao-detail.html'
})
export class InstituicaoDetailPage {
 
  public instituicao: any = [];

  public listacampanha: any = [];
  public listalocaldoacao: any = [];
 
  campanhasData: any = [];
  doacaoData: any = [];

  constructor(public nav: NavController, public instituicaoService: InstituicaoService, public navParams: NavParams) {

    let id = navParams.get('id');

    this.instituicao = instituicaoService.getItem(id).subscribe(response => {
      console.log(response);
      this.instituicao = response;
    })

    this.listacampanha = instituicaoService.getCampanha(id).subscribe(response => {
      console.log(response);
      this.campanhasData = response;
    })

  }


  buscalocaldoar(id) {

    this.listalocaldoacao = this.instituicaoService.getLocaldoacao(id).subscribe(response => {
      this.doacaoData = response;
      console.log(response);
    })
  }
 
}
