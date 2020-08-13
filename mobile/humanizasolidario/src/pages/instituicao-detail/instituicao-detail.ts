import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TripService } from "../../services/trip-service";
import { CheckoutTripPage } from "../checkout-trip/checkout-trip";
import { InstituicaoService } from "../../services/instituicao-service";

@Component({
  selector: 'page-instituicao-detail',
  templateUrl: 'instituicao-detail.html'
})
export class InstituicaoDetailPage {
  // trip info
  public instituicao: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public nav: NavController, public instituicaoService: InstituicaoService) {
    // set sample data
    this.instituicao = instituicaoService.getItem(1).subscribe(response => {
      console.log(response);
      this.instituicao = response;
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
    this.nav.push(CheckoutTripPage);
  }
}
