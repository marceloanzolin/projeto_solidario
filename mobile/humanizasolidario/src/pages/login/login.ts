import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {InstituicaoDetailPage} from "../instituicao-detail/instituicao-detail";
import {InstituicaoService} from "../../services/instituicao-service";
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  instituicao = {
    dsemail: "",
    dssenha: ""
  }
  private msg : string ;


  constructor(public nav: NavController, public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public instituicaoService: InstituicaoService) {
    this.menu.swipeEnable(false);
    this.msg = this.navParams.get("msg");
    console.log(this.msg);

    if (this.msg != '' && this.msg != undefined) {
      let toast = this.toastCtrl.create({
        message: 'Cadastro realizado com sucesso',
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
    //this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    console.log(this.instituicao);
    this.instituicaoService.login(this).subscribe(response => {
      console.log(response);
      if (parseInt(response.codinstituicao) > 0) {
       this.nav.push(InstituicaoDetailPage, {id: response.codinstituicao});
      }
    })
    //this.nav.setRoot(HomePage)
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Esqueceu sua senha?',
      message: "Informe seu email para enviarmos um link para cadastrar sua nova senha.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email enviado',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
