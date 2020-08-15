import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {InstituicaoService} from "../services/instituicao-service";

import {MyApp} from "./app.component";

import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {InstituicaoDetailPage} from "../pages/instituicao-detail/instituicao-detail";
import {TpusuarioPage} from "../pages/tpusuario/tpusuario";
import {InstituicaoPage} from "../pages/instituicao/instituicao";
import { InstituicaoServiceProvider } from '../providers/instituicao-service/instituicao-service';


// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    InstituicaoDetailPage,
    TpusuarioPage,
    InstituicaoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    InstituicaoDetailPage,
    TpusuarioPage,
    InstituicaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    InstituicaoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InstituicaoServiceProvider
  ]
})

export class AppModule {
}
