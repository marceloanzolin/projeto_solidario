import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { InstituicaoService } from "../../services/instituicao-service";


@Component({
  selector: 'page-instituicao-detail',
  templateUrl: 'instituicao-detail.html'
})
export class InstituicaoDetailPage {
  // trip info
  public instituicao: any;

  public listacampanha: any;
  public listalocaldoacao: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  campanhasData: any;
  doacaoData: any;

  constructor(public nav: NavController, public instituicaoService: InstituicaoService,public navParams: NavParams) {
    // set sample data

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
   
    this.listalocaldoacao =this.instituicaoService.getLocaldoacao(id).subscribe(response => {
      console.log(response);
      this.doacaoData = response;
      console.log(response);
    })
  }
  // minus adult when click minus button
  minusAdult() {
    this.adults--;

  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
  //  this.nav.push(CheckoutTripPage);
  }
}
