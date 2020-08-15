import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {InstituicaoService} from "../../services/instituicao-service";
import {InstituicaoDetailPage} from "../instituicao-detail/instituicao-detail";
import { IonicPage, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { controlNameBinding } from "@angular/forms/src/directives/reactive_directives/form_control_name";
import {Instituicao} from "../../models/instituicao";
@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html'
})
export class InstituicaoPage {
  
 public  instituicoes: any;
 public  instituicoesara: any;
 public  instituicao:any;
 public totalinstituicao:Number;
 instituicoesData: any;


  constructor(public nav: NavController, public instituicaoService: InstituicaoService) {

    this.instituicaoService.getAll().subscribe(response => {
			console.log(response);
      this.instituicoesData = response;
      this.totalinstituicao = this.instituicoesData.length  
    })
  }

  viewDetail(id) {
    this.nav.push(InstituicaoDetailPage, {id: id});
  }

  viewLocalDoacaao(id) {
    this.nav.push(InstituicaoDetailPage, {id: id});
  }

  
}
