import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {InstituicaoService} from "../../services/instituicao-service";
//import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html'
})
export class InstituicaoPage {
  // list of trips
  public instituicoes: any;
//trips
  constructor(public nav: NavController, public instituicaoService: InstituicaoService) {
    // set sample data
    this.instituicoes = instituicaoService.getAll();
  }

  // view trip detail
  viewDetail(id) {
   // this.nav.push(TripDetailPage, {id: id});
  }
}
